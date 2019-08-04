import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class OperatorStore {
    @observable operatorList: any[] = []

    @observable operatorMap: Map<string, any> = new Map()

    @action getOperatorList() {
        request('/api/management/operator/getOperatorList').then(res => {
            if (res) {
                if (res.status) {
                    const operatorList = Array.isArray(res.voData) ? res.voData : [];
                    const operatorMap: Map<string, any> = new Map()
                    operatorList.forEach((element: any) => {
                        operatorMap.set(element.operatorId, element)
                    });

                    this.operatorMap = operatorMap
                    this.operatorList = [...this.operatorMap.values()]

                } else {
                    toast.error(`查询操作员错误：${res.message}`);
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action saveOrUpdateOperator(operator: any) {
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

    @action deleteOperatorByOperatorId(operatorId: string) {
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

    @action createOperator() {
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