import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class MarketDataRecordingStore {


    @observable contractList: any[] = []
    @observable contractUnifiedSymbolSet: Set<string> = new Set()

    @action getContractList() {
        request('/api/management/marketDataRecording/getContractList').then(res => {
            if (res) {
                if (res.status) {
                    this.contractList = Array.isArray(res.voData) ? res.voData : [];
                    const contractListLength = this.contractList.length
                    const contractUnifiedSymbolSet: Set<string> = new Set()
                    for (let i = 0; i < contractListLength; i++) {
                        contractUnifiedSymbolSet.add(this.contractList[i].unifiedSymbol)
                    }
                    this.contractUnifiedSymbolSet = contractUnifiedSymbolSet
                } else {
                    toast.error(`查询行情记录合约列表错误：${res.message}`)
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action addContractByUnifiedSymbol(contract: any) {
        request('/api/management/marketDataRecording/addContractByUnifiedSymbol', {
            method: 'POST',
            data: {
                ...contract
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

    @action deleteContractByUnifiedSymbol(unifiedSymbol: any) {
        request('/api/management/marketDataRecording/deleteContractByUnifiedSymbol', {
            method: 'POST',
            data: {
                'voData': unifiedSymbol
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