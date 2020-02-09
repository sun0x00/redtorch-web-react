import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class GatewayStore {
    @observable gatewayList: any[] = []

    @action getGatewayList() {
        request('/api/management/gateway/getGatewayList').then(res => {
            if (res) {
                if (res.status) {
                    this.gatewayList = Array.isArray(res.voData) ? res.voData : [];
                } else {
                    toast.error(`查询网关错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action saveOrUpdateGateway(gateway: any) {
        request('/api/management/gateway/saveOrUpdateGateway', {
            method: 'POST',
            data: {
                ...gateway
            }
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`增加或修改网关错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action deleteGatewayByGatewayId(gatewayId: string) {
        request('/api/management/gateway/deleteGatewayByGatewayId', {
            method: 'POST',
            data: {
                'voData': gatewayId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`删除网关错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }


    @action connectGatewayByGatewayId(gatewayId: string) {
        request('/api/management/gateway/connectGatewayByGatewayId', {
            method: 'POST',
            data: {
                'voData': gatewayId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`连接网关错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }


    @action disconnectGatewayByGatewayId(gatewayId: string) {
        request('/api/management/gateway/disconnectGatewayByGatewayId', {
            method: 'POST',
            data: {
                'voData': gatewayId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`断开网关错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }


    @action disconnectAllGateways() {
        request('/api/management/gateway/disconnectAllGateways').then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`断开全部网关错误:${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }

    @action connectAllGateways() {
        request('/api/management/gateway/connectAllGateways').then(res => {
            if (res) {
                if (res.status) {
                    this.getGatewayList()
                } else {
                    toast.error(`连接全部网关错误:${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }







}
export const gatewayStore = new GatewayStore()