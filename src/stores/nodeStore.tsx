import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class NodeStore {
    nodeList: any[] = [];

    constructor() {
        makeObservable(this, {
            nodeList: observable,
            getNodeList: action,
            createNode: action,
            deleteNodeByNodeId: action,
            resetNodeTokenByNodeId: action,
            updateNodeDescriptionByNodeId: action,
            setNodeList: action
        });
    }

    setNodeList(nodeList:any[]) {
        this.nodeList = nodeList
    }

    getNodeList() {
        request('/api/management/node/getNodeList').then(res => {
            if (res) {
                if (res.status) {
                    const nodeList = Array.isArray(res.voData) ? res.voData : [];
                    this.setNodeList(nodeList)
                } else {
                    toast.error(`查询节点错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    createNode() {
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

    deleteNodeByNodeId(nodeId: number) {
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
    resetNodeTokenByNodeId(nodeId: number) {
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

    updateNodeDescriptionByNodeId(nodeId: number, description: string) {
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