
import { IDatePickerStrings } from 'office-ui-fabric-react/lib/DatePicker';

const hostNamePattern = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/

const ipv4PattenPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/

const portPattern = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/

const normalIntegerPattern = /^\+?(0|[1-9]\d*)$/


const numberFormat = (value: number, decimals: number, comma?: boolean) => {

    try {
        if (value === undefined) {
            return "undefined";
        } else if (Number.isNaN(value)) {
            return "NA";
        } else {
            if (Math.abs(value) > 10000000000) {
                return value.toExponential(decimals)
            }
        }
        const result = value.toFixed(decimals);
        if (comma) {
            const reg = result.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
            return result.replace(reg, "$1,")
        } else {
            return result
        }
    } catch (error) {
        console.log("格式化数字发生错误", error)
        return "ERROR"
    }

}

const leftZeroPad = (val: any, minLength: number) => {
    try {
        let newValue = val;
        if (typeof (newValue) !== "string") {
            newValue = String(val);
        }
        if (minLength <= newValue.length) {
            return newValue
        }
        return ("00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000".substring(0, minLength - newValue.length)) + newValue;
    } catch (error) {
        console.error("补齐长度发生错误", error)
        throw error
    }
}

const formatDate = (date: Date, fmt: string) => {
    if (!date) {
        return ''
    }

    let result = fmt;
    try {
        if (/(y+)/.test(result)) {
            result = result.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
        }
        const o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'H+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'S+': date.getMilliseconds()
        }

        const keyList = Object.keys(o)
        const keyListLength = keyList.length
        for (let i = 0; i < keyListLength; i++) {
            const k = keyList[i]
            if (new RegExp(`(${k})`).test(result)) {
                const str = `${o[k]}`;
                if (k === 'S+') {
                    result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : leftZeroPad(str, 3));
                } else {
                    result = result.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : leftZeroPad(str, 2));
                }
            }
        }
    } catch (error) {
        console.log("格式化时间发生错误", error)
        result = date.toISOString()
    }

    return result;
};


const timestampFormat = (timestamp?: number | null, formatStr?: string) => {
    if (!timestamp) {
        return ''
    }
    try {
        const date = new Date(timestamp);
        if (formatStr) {
            return formatDate(date, formatStr)
        }
        return formatDate(date, "yyyy-MM-dd HH:mm:ss.SSS")
    } catch (error) {
        console.error("时间转换错误", error)
        return 'ERROR'
    }
};


const roundWithStep = (value: number, step: number) => {
    try {
        let tmpStep = step;
        if (!step) {
            tmpStep = 1.0
        }
        const inv = 1.0 / tmpStep;
        return Math.round(value * inv) / inv;
    } catch (error) {
        console.error("格式化到最小变动价位发生错误", error)
        return 0
    }

}

const deepCopy = (o: any): any => {
    if (o instanceof Array) {  // 先判断Array
        const n = [];
        for (let i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        const n = {}
        for (const i in o) {
            if (i) {
                n[i] = deepCopy(o[i]);
            }
        }
        return n;
    } else {
        return o;
    }
}

const getNumberOfDecimalDigits = (value: number) => {
    try {

        let x = String(value).indexOf('.');
        if (x === -1) {
            return 0
        } else {
            x = x + 1
        }
        const y = String(value).length - x; // 小数的位数
        if (y > 0) {
            return y
        } else {
            return 0
        }
    } catch (error) {
        console.error("获取小数位数发生错误")
        return null
    }

}

const checkEffectiveNumber = (value: any): boolean => {
    if (value === 0 || (value && value !== Number.MAX_VALUE)) {
        return true;
    } else {
        return false;
    }
}

// const isDevEnv = process.env.NODE_ENV === "development"
const isDevEnv = false


const dayPickerStrings: IDatePickerStrings = {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],

    shortMonths: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],

    days: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],

    shortDays: ['日', '一', '二', '三', '四', '五', '六'],

    goToToday: '今日',
    prevMonthAriaLabel: '上个月',
    nextMonthAriaLabel: '下个月',
    prevYearAriaLabel: '上一年',
    nextYearAriaLabel: '下一年',
    closeButtonAriaLabel: '关闭'
};


import { xyz } from './node/pb/pb'

const { ExchangeEnum, CurrencyEnum, ProductTypeEnum } = xyz.redtorch.pb

const exchangeOptions: any[] = []
exchangeOptions.push({
    key: 9999,
    text: '全部'
})
Object.keys(ExchangeEnum).forEach(
    (element: any) => {
        exchangeOptions.push({
            key: ExchangeEnum[element],
            text: element
        })
    }
)

const currencyOptions: any[] = []
currencyOptions.push({
    key: 9999,
    text: '全部'
})
Object.keys(CurrencyEnum).forEach(
    (element: any) => {
        currencyOptions.push({
            key: CurrencyEnum[element],
            text: element
        })
    }
)

const productTypeOptions: any[] = []
productTypeOptions.push({
    key: 9999,
    text: '全部'
})
Object.keys(ProductTypeEnum).forEach(
    (element: any) => {
        productTypeOptions.push({
            key: ProductTypeEnum[element],
            text: element
        })
    }
)

export {
    hostNamePattern,
    ipv4PattenPattern,
    portPattern,
    normalIntegerPattern,
    numberFormat,
    leftZeroPad,
    timestampFormat,
    roundWithStep,
    deepCopy,
    isDevEnv,
    dayPickerStrings,
    getNumberOfDecimalDigits,
    checkEffectiveNumber,
    productTypeOptions,
    currencyOptions,
    exchangeOptions
}