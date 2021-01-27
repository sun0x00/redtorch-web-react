import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class MarketDataRecordingStore {
    contractList: any[] = [];
    contractUniformSymbolSet: Set<string> = new Set();

    constructor() {
        makeObservable(this, {
            contractList: observable,
            contractUniformSymbolSet: observable,
            getContractList: action,
            addContractByUniformSymbol: action,
            deleteContractByUniformSymbol: action,
            setContractList: action
        });
    }

    setContractList(contractList:any[]) {
        this.contractList = contractList
        const contractUniformSymbolSet: Set<string> = new Set()
        for (let i = 0; i < this.contractList.length; i++) {
            contractUniformSymbolSet.add(this.contractList[i].uniformSymbol)
        }
        this.contractUniformSymbolSet = contractUniformSymbolSet
    }

    getContractList() {
        request('/api/management/marketDataRecording/getContractList').then(res => {
            if (res) {
                if (res.status) {
                    const contractList = Array.isArray(res.voData) ? res.voData : [];
                    this.setContractList(contractList)
                } else {
                    toast.error(`查询行情记录合约列表错误：${res.message}`)
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    addContractByUniformSymbol(uniformSymbol: any) {
        request('/api/management/marketDataRecording/addContractByUniformSymbol', {
            method: 'POST',
            data: {
                'voData': uniformSymbol
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getContractList()
                    toast.info("加入行情记录已执行")
                } else {
                    toast.error(`加入行情记录错误：${res.message}`)
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    deleteContractByUniformSymbol(uniformSymbol: any) {
        request('/api/management/marketDataRecording/deleteContractByUniformSymbol', {
            method: 'POST',
            data: {
                'voData': uniformSymbol
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getContractList()
                    toast.info("从行情记录中移除已执行")
                } else {
                    toast.error(`从行情记录中移除错误：${res.message}`)
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
export const marketDataRecordingStore = new MarketDataRecordingStore()