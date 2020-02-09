import { rpcClientProcess } from '../service/rpcClientProcess'

import { toast } from 'react-toastify';

class WebSocketClientHandler {

    public static STATUS_DISCONNECTED = 0;
    public static STATUS_CONNECTED = 1;
    public static STATUS_CONNECTING = 2;
    public static STATUS_DISCONNECTING = 3;

    public static getInstance(): WebSocketClientHandler {
        if (!WebSocketClientHandler.instance) {
            WebSocketClientHandler.instance = new WebSocketClientHandler();
        }
        return WebSocketClientHandler.instance;
    }

    private static instance: WebSocketClientHandler;

    private authFailedState: boolean = false;
    private connectRetry: boolean = false;
    private connectRetryTimes: number = 0;
    private connectStatus: number = 0;
    private closeCode: number;
    private closeReason: string;

    private ws: WebSocket;

    private constructor() {
    }

    getStatus = () => {
        return {
            'authFailedState': this.authFailedState,
            'connectStatus': this.connectStatus,
            'closeCode': this.closeCode,
            'closeReason': this.closeReason,
            'connectRetryTimes': this.connectRetryTimes
        }
    }

    checkConnected = () => {
        return this.connectStatus === WebSocketClientHandler.STATUS_CONNECTED
    }

    public async asyncConnected() {
        this.connect()
    }

    connect = () => {

        if (this.connectStatus === WebSocketClientHandler.STATUS_DISCONNECTED) {

            this.connectRetry = true;
            this.connectStatus = WebSocketClientHandler.STATUS_CONNECTING;
            this.authFailedState = false;


            this.ws = new WebSocket(`ws://${window.location.hostname}:${window.location.port}/websocket`)
            this.ws.binaryType = "arraybuffer"

            this.ws.addEventListener("open", this.onopen)
            this.ws.addEventListener("close", this.onclose)
            this.ws.addEventListener("error", this.onerror)
            this.ws.addEventListener("message", this.onmessage)
        } else {
            console.log("连接已建立或正在连接,请勿重复连接");
        }

    }

    disconnect = () => {
        this.connectRetry = false;
        this.connectRetryTimes = 0;
        if (this.connectStatus === WebSocketClientHandler.STATUS_CONNECTED && this.ws) {
            this.connectStatus = WebSocketClientHandler.STATUS_DISCONNECTING;
            try {
                this.ws.close()
            } catch (error) {
                console.log("尝试关闭WS客户端发生错误", error)
            }
        } else {
            console.log("无需断开连接,连接尚未建立")
        }
    }

    onopen = () => {
        toast.success(`WebSocket连接已建立`)
        this.connectRetryTimes = 0;
        this.connectStatus = WebSocketClientHandler.STATUS_CONNECTED;
        rpcClientProcess.onConnectd()
    }

    onmessage = (e: MessageEvent) => {
        const bytes = new Uint8Array(e.data)
        rpcClientProcess.processData(bytes)
    }

    onclose = (e: CloseEvent) => {
        this.connectStatus = WebSocketClientHandler.STATUS_DISCONNECTED;
        toast.error(`WebSocket连接已关闭,代码:${e.code},原因:${e.reason}`)
        if (this.ws) {
            try {
                this.ws.close()
            } catch (error) {
                console.log("尝试关闭WS客户端发生错误", e)
            }
            try {
                this.ws.removeEventListener("open", this.onopen)
                this.ws.removeEventListener("close", this.onclose)
                this.ws.removeEventListener("error", this.onerror)
                this.ws.removeEventListener("message", this.onmessage)
            } catch (error) {
                console.log("移除监听函数错误", e)
            }
        }
        this.closeCode = e.code;
        this.closeReason = e.reason;
        const that = this;
        if (e.code === 1000 && e.reason === "验证登录信息失败!") {
            console.log("WebSocket连接已关闭,验证登录信息失败!不再重连!")
            this.authFailedState = true;
        }else if (e.code === 1000 && e.reason === "节点冲突!") {
            console.log("WebSocket连接已关闭,节点冲突!不再重连!")
            toast.error("WebSocket连接已关闭,节点冲突!不再重连!")
            this.authFailedState = true;
        } else {
            if (this.connectRetry) {
                console.log(`连接已关闭,等待3s后重连`)
                this.connectStatus = WebSocketClientHandler.STATUS_CONNECTING;
                this.connectRetryTimes++;
                setTimeout(() => {
                    that.connectStatus = WebSocketClientHandler.STATUS_DISCONNECTED;
                    if (that.connectRetry) {
                        toast.warn(`WebSocket第${that.connectRetryTimes}次尝试重连`)
                        that.connect();
                    }
                }, 3000);
            } else {
                console.log(`连接已关闭,不再重连`)
            }
        }
    }
    onerror = (e: ErrorEvent) => {
        this.connectStatus = WebSocketClientHandler.STATUS_DISCONNECTED;
        console.error(`连接错误`, e)
    }

    sendData = (data: ArrayBufferLike): boolean => {
        if (!this.ws || !(this.ws.readyState === 1)) {
            console.error("发送二进制数据错误，连接不存在或已经断开");
            toast.error(`WebSocket发送二进制数据错误，连接不存在或已经断开`)
            return false;
        } else {
            try {
                this.ws.send(data);
            } catch (error) {
                console.error("发送二进制数据错误", error);
                toast.error(`WebSocket发送二进制数据错误`)
                return false;
            }
            return true;
        }
    }

}

const webSocketClientHandler = WebSocketClientHandler.getInstance()

export { webSocketClientHandler };