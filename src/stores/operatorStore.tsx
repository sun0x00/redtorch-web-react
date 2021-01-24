import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class OperatorStore {
    operatorList: any[] = [];
    operatorMap: Map<string, any> = new Map();

    constructor() {
        makeObservable(this, {
            operatorList: observable,
            operatorMap: observable,
            getOperatorList: action,
            saveOrUpdateOperator: action,
            deleteOperatorByOperatorId: action,
            createOperator: action,
            setOperatorList: action
        });
    }

    
    setOperatorList(operatorList:any[]) {
        const operatorMap: Map<string, any> = new Map()
        operatorList.forEach((element: any) => {
            operatorMap.set(element.operatorId, element)
        });

        this.operatorMap = operatorMap
        this.operatorList = [...this.operatorMap.values()]
    }

    getOperatorList() {
        request('/api/management/operator/getOperatorList').then(res => {
            if (res) {
                if (res.status) {
                    const operatorList = Array.isArray(res.voData) ? res.voData : [];
                    this.setOperatorList(operatorList)
                } else {
                    toast.error(`查询操作员错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    saveOrUpdateOperator(operator: any) {
        request('/api/management/operator/saveOrUpdateOperator', {
            method: 'POST',
            data: {
                ...operator
            }
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getOperatorList()
                } else {
                    toast.error(`增加或修改操作员错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteOperatorByOperatorId(operatorId: string) {
        request('/api/management/operator/deleteOperatorByOperatorId', {
            method: 'POST',
            data: {
                'voData': operatorId
            }

        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getOperatorList()
                } else {
                    toast.error(`删除操作员错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.error(err);
        });
    }

    createOperator() {
        request('/api/management/operator/createOperator').then(res => {
            if (res) {
                if (res.status) {
                    this.getOperatorList()
                } else {
                    toast.error(`新增操作员错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
export const operatorStore = new OperatorStore()