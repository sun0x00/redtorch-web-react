import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class NodeStore {
    @observable nodeList: any[] = []

    @action getNodeList() {
        request('/api/management/node/getNodeList').then(res => {
            if (res) {
                if (res.status) {
                    this.nodeList = Array.isArray(res.voData) ? res.voData : [];
                } else {
                    toast.error(`查询节点错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action createNode() {
        request('/api/management/node/createNode').then(res => {
            if (res) {
                if (res.status) {
                    this.getNodeList()
                } else {
                    toast.error(`新增节点错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action deleteNodeByNodeId(nodeId: number) {
        request('/api/management/node/deleteNodeByNodeId', {
            method: 'POST',
            data: {
                'voData': nodeId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getNodeList()
                } else {
                    toast.error(`删除节点错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
    @action resetNodeTokenByNodeId(nodeId: number) {
        request('/api/management/node/resetNodeTokenByNodeId', {
            method: 'POST',
            data: {
                'voData': nodeId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getNodeList()
                } else {
                    toast.error(`重置节点令牌错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action updateNodeDescriptionByNodeId(nodeId: number, description: string) {
        request('/api/management/node/updateNodeDescriptionByNodeId', {
            method: 'POST',
            data: {
                'nodeId': nodeId,
                'description': description
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getNodeList()
                } else {
                    toast.error(`更新节点描述错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }



}
export const nodeStore = new NodeStore()