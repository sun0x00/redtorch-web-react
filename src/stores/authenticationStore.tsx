import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';
import { webSocketClientHandler } from '../node/client/websocket/webSocketClientHandler';

class AuthenticationStore {
    @observable isAuthenticated = false
    @observable userPo: any;
    @observable saveLoginInfoState: boolean = false;
    @observable username: string;
    @observable password: string;
    @observable nodeId: number;
    @observable operatorId: string;

    constructor() {
        this.initStore()

        window.setInterval(() => {
            if (this.isAuthenticated) {
                this.keepLogin()
            }
        }, 15000);

    }
    @action initStore() {
        const userPoJsonStr = sessionStorage.getItem('LOGINED_USER');
        if (userPoJsonStr) {
            this.userPo = JSON.parse(userPoJsonStr);
            this.isAuthenticated = true;
            this.operatorId = this.userPo.operatorId;
            this.nodeId = this.userPo.recentlyNodeId;
            this.username = this.userPo.username;
            webSocketClientHandler.connect()
        } else {
            const username = localStorage.getItem("username")
            if (username) {
                this.username = username;
                this.saveLoginInfoState = true;
            }
            const password = localStorage.getItem("password")
            if (password) {
                this.password = password;
            }
        }
    }

    @action setUsername(username: string) {
        this.username = username;
    }

    @action setPassword(password: string) {
        this.password = password;
    }

    @action setSaveLoginInfoState(saveLoginInfoState: boolean) {
        this.saveLoginInfoState = saveLoginInfoState;
    }


    @action logout() {
        sessionStorage.removeItem("LOGINED_USER");
        this.userPo = null;
        this.isAuthenticated = false;
        webSocketClientHandler.disconnect()
        request('/api/logout')
    }

    @action keepLogin() {
        request('/api/keepLogin')
    }

    @action login() {
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
                    if (this.saveLoginInfoState) {
                        localStorage.setItem("username", this.username);
                        localStorage.setItem("password", this.password)
                    } else {
                        localStorage.removeItem("username")
                        localStorage.removeItem("password")
                        this.password = ""
                        this.saveLoginInfoState = false;
                    }
                    this.operatorId = this.userPo.operatorId;
                    this.nodeId = this.userPo.recentlyNodeId;
                    sessionStorage.setItem('LOGINED_USER', JSON.stringify(this.userPo));
                    this.isAuthenticated = true;
                    webSocketClientHandler.connect()
                } else {
                    toast.error(`登录错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action deleteLoginInfo() {

        localStorage.removeItem("username")
        localStorage.removeItem("password")

        this.username = "";
        this.password = "";
        this.saveLoginInfoState = false;
    }

    @action changePassword(password: string, newPassword: string) {
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