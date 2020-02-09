import { observable, action } from 'mobx'
import request from '../request'
import { toast } from 'react-toastify';

class CustomizeStore {
    @observable favoriteContractList: any[] = []
    @observable favoriteContractUnifiedSymbolSet: Set<string> = new Set()

    @action getFavoriteContractList() {
        request('/api/customize/getFavoriteContractList').then(res => {
            if (res) {
                if (res.status) {
                    this.favoriteContractList = Array.isArray(res.voData) ? res.voData : [];
                    const favoriteContractListLength = this.favoriteContractList.length
                    const favoriteContractUnifiedSymbolSet: Set<string> = new Set()
                    for (let i = 0; i < favoriteContractListLength; i++) {
                        favoriteContractUnifiedSymbolSet.add(this.favoriteContractList[i].unifiedSymbol)
                    }
                    this.favoriteContractUnifiedSymbolSet = favoriteContractUnifiedSymbolSet
                } else {
                    toast(`查询常用合约列表错误：${res.message}`, { autoClose: false, type: "error" })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action addFavoriteContractByUnifiedSymbol(unifiedSymbol: any) {
        request('/api/customize/addFavoriteContractByUnifiedSymbol', {
            method: 'POST',
            data: {
                'voData':unifiedSymbol
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getFavoriteContractList()
                    toast("加入常用已执行", { autoClose: 5000, type: "info" })
                } else {
                    toast(`加入常用错误：${res.message}`, { autoClose: false, type: "error" })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    @action deleteFavoriteContractByUnifiedSymbol(unifiedSymbol: any) {
        request('/api/customize/deleteFavoriteContractByUnifiedSymbol', {
            method: 'POST',
            data: {
                'voData': unifiedSymbol
            },
        }).then(res => {
            if (res) {
                if (res.status) {
                    this.getFavoriteContractList()
                    toast('从常用中移除已执行', { autoClose: 5000, type: "info" })
                } else {
                    toast(`从常用中移除错误：${res.message}`, { autoClose: false, type: "error" })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }
}
export const customizeStore = new CustomizeStore()