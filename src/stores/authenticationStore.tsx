import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';
import { webSocketClientHandler } from '../node/client/websocket/webSocketClientHandler';

class AuthenticationStore {
    isAuthenticated = false;
    userPo: any;
    saveLoginInfoState: boolean = false;
    username: string = "";
    password: string = "";
    operatorId: string = "";
    authToken: string = "";

    constructor() {
        makeObservable(this, {
            isAuthenticated: observable,
            userPo: observable,
            saveLoginInfoState: observable,
            username: observable,
            password: observable,
            operatorId: observable,
            authToken: observable,
            initStore: action,
            setUsername: action,
            setPassword: action,
            setSaveLoginInfoState: action,
            logout: action,
            getAuthToken: action,
            checkLoginStatus: action,
            login: action,
            setLoginSuccess: action,
            deleteLoginInfo: action,
            changePassword: action
        });

        this.initStore()

        window.setInterval(() => {
            if (this.isAuthenticated) {
                this.checkLoginStatus()
            }
        }, 15000);
    }

    initStore() {
        const userPoJsonStr = sessionStorage.getItem('LOGINED_USER');
        if (userPoJsonStr) {
            this.userPo = JSON.parse(userPoJsonStr);
            this.authToken = this.userPo.randomAuthToken;
            this.isAuthenticated = true;
            this.operatorId = this.userPo.operatorId;
            this.username = this.userPo.username;
            webSocketClientHandler.setAuthToken(this.authToken)
            webSocketClientHandler.connect()
        } else {
            const username = localStorage.getItem("username")
            if (username) {
                this.username = username;
                this.saveLoginInfoState = true;
            }
        }
    }

    setUsername(username: string) {
        this.username = username;
    }

    setPassword(password: string) {
        this.password = password;
    }

    setSaveLoginInfoState(saveLoginInfoState: boolean) {
        this.saveLoginInfoState = saveLoginInfoState;
    }


    logout() {
        sessionStorage.removeItem("LOGINED_USER");
        this.userPo = null;
        this.isAuthenticated = false;
        this.authToken = "";
        webSocketClientHandler.disconnect()
        request('/api/logout')
    }

    getAuthToken() {
        return this.authToken
    }

    checkLoginStatus() {
        request('/api/checkLoginStatus')
    }

    login() {
        request('/api/login', {
            method: 'POST',
            data: {
                'username': this.username,
                'password': this.password
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.userPo = res.voData;
                    this.setLoginSuccess(this.userPo)
                } else {
                    toast.error(`登录错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    setLoginSuccess(userPo:any){
        if (this.saveLoginInfoState) {
            localStorage.setItem("username", this.username);
        } else {
            localStorage.removeItem("username")
            this.username = ""
            this.saveLoginInfoState = false;
        }
        sessionStorage.setItem('LOGINED_USER', JSON.stringify(this.userPo));
        this.operatorId = this.userPo.operatorId;
        this.authToken = this.userPo.randomAuthToken;
        this.isAuthenticated = true;
        webSocketClientHandler.setAuthToken(this.authToken)
        webSocketClientHandler.connect()
    }

    deleteLoginInfo() {

        localStorage.removeItem("username")

        this.username = "";
        this.saveLoginInfoState = false;
    }

    changePassword(password: string, newPassword: string) {
        request('/api/changePassword', {
            method: 'POST',
            data: {
                'password': password,
                'newPassword': newPassword
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    toast.success("修改密码完成")
                } else {
                    toast.error(`修改密码错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

}
export const authenticationStore = new AuthenticationStore()