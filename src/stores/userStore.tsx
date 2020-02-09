import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class UserStore {
    @observable userList: any[] = []

    @action getUserList() {
        request('/api/management/user/getUserList').then(res => {
            if (res) {
                if (res.status) {
                    this.userList = Array.isArray(res.voData) ? res.voData : [];
                } else {
                    toast.error(`查询用户错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action addUser(user: any) {

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

    @action deleteUserByUsername(username: string) {
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


    @action updateUserDescriptionByUsername(username: string, description: string) {
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


    @action updateUserPasswordByUsername(username: string, password: string) {
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



    @action updateUserPermissionByUsername(user: any) {

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