import { observable, action, makeObservable } from 'mobx';
import request from '../request'
import { toast } from 'react-toastify';

class CustomizeStore {
    favoriteContractList: any[] = [];
    favoriteContractUniformSymbolSet: Set<string> = new Set();

    constructor() {
        makeObservable(this, {
            favoriteContractList: observable,
            favoriteContractUniformSymbolSet: observable,
            getFavoriteContractList: action,
            addFavoriteContractByUniformSymbol: action,
            deleteFavoriteContractByUniformSymbol: action,
            setFavoriteContractList: action
        });
    }

    setFavoriteContractList(favoriteContractList:any[]) {
        this.favoriteContractList = favoriteContractList

        const favoriteContractUniformSymbolSet: Set<string> = new Set()
        for (let i = 0; i < this.favoriteContractList.length; i++) {
            favoriteContractUniformSymbolSet.add(this.favoriteContractList[i].uniformSymbol)
        }
        this.favoriteContractUniformSymbolSet = favoriteContractUniformSymbolSet
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

    addFavoriteContractByUniformSymbol(uniformSymbol: any) {
        request('/api/customize/addFavoriteContractByUniformSymbol', {
            method: 'POST',
            data: {
                'voData': uniformSymbol
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

    deleteFavoriteContractByUniformSymbol(uniformSymbol: any) {
        request('/api/customize/deleteFavoriteContractByUniformSymbol', {
            method: 'POST',
            data: {
                'voData': uniformSymbol
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