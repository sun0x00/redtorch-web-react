import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class CustomizeStore {
    favoriteContractList: any[] = [];
    favoriteContractUnifiedSymbolSet: Set<string> = new Set();

    constructor() {
        makeObservable(this, {
            favoriteContractList: observable,
            favoriteContractUnifiedSymbolSet: observable,
            getFavoriteContractList: action,
            addFavoriteContractByUnifiedSymbol: action,
            deleteFavoriteContractByUnifiedSymbol: action,
            setFavoriteContractList: action
        });
    }

    setFavoriteContractList(favoriteContractList:any[]) {
        this.favoriteContractList = favoriteContractList

        const favoriteContractUnifiedSymbolSet: Set<string> = new Set()
        for (let i = 0; i < this.favoriteContractList.length; i++) {
            favoriteContractUnifiedSymbolSet.add(this.favoriteContractList[i].unifiedSymbol)
        }
        this.favoriteContractUnifiedSymbolSet = favoriteContractUnifiedSymbolSet
    }

    getFavoriteContractList() {
        request('/api/customize/getFavoriteContractList').then(res => {
            if (res) {
                if (res.status) {
                    const favoriteContractList = Array.isArray(res.voData) ? res.voData : [];
                    this.setFavoriteContractList(favoriteContractList)
                } else {
                    toast(`查询常用合约列表错误：${res.message}`, { autoClose: false, type: "error" })
                }
            }
        }).catch(err => {
            console.log(err);
        });
    }

    addFavoriteContractByUnifiedSymbol(unifiedSymbol: any) {
        request('/api/customize/addFavoriteContractByUnifiedSymbol', {
            method: 'POST',
            data: {
                'voData': unifiedSymbol
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

    deleteFavoriteContractByUnifiedSymbol(unifiedSymbol: any) {
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