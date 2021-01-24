import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class UserStore {
    userList: any[] = [];

    constructor() {
        makeObservable(this, {
            userList: observable,
            getUserList: action,
            addUser: action,
            deleteUserByUsername: action,
            updateUserDescriptionByUsername: action,
            updateUserPasswordByUsername: action,
            updateUserPermissionByUsername: action,
            setUserList: action
        });
    }

    setUserList(userList:any[]){
        this.userList = userList
    }

    getUserList() {
        request('/api/management/user/getUserList').then(res => {
            if (res) {
                if (res.status) {
                    const userList = Array.isArray(res.voData) ? res.voData : [];
                    this.setUserList(userList)
                } else {
                    toast.error(`查询用户错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    addUser(user: any) {

        request('/api/management/user/addUser', {
            method: 'POST',
            data: {
                ...user
            }
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getUserList()
                } else {
                    toast.error(`新增用户错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteUserByUsername(username: string) {
        request('/api/management/user/deleteUserByUsername', {
            method: 'POST',
            data: {
                'voData': username
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getUserList()
                } else {
                    toast.error(`删除用户错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }


    updateUserDescriptionByUsername(username: string, description: string) {
        request('/api/management/user/updateUserDescriptionByUsername', {
            method: 'POST',
            data: {
                'username': username,
                'description': description
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getUserList()
                } else {
                    toast.error(`更新用户描述错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }


    updateUserPasswordByUsername(username: string, password: string) {
        request('/api/management/user/updateUserPasswordByUsername', {
            method: 'POST',
            data: {
                'username': username,
                'newPassword': password
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getUserList()
                } else {
                    toast.error(`更新用户密码错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }



    updateUserPermissionByUsername(user: any) {

        request('/api/management/user/updateUserPermissionByUsername', {
            method: 'POST',
            data: {
                ...user
            }
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getUserList()
                } else {
                    toast.error(`更新用户权限错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
export const userStore = new UserStore()