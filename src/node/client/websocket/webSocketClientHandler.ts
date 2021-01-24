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
    private closeCode: number = 0;
    private closeReason: string = "";
    private authToken: string = "";
    private ws: WebSocket | null = null;

    private constructor() {
    }

    public setAuthToken = (authToken: string) => {
        this.authToken = authToken
    }

    public getStatus = () => {
        return {
            'authFailedState': this.authFailedState,
            'connectStatus': this.connectStatus,
            'closeCode': this.closeCode,
            'closeReason': this.closeReason,
            'connectRetryTimes': this.connectRetryTimes
        }
    }

    public checkConnected = () => {
        return this.connectStatus === WebSocketClientHandler.STATUS_CONNECTED
    }

    public connect = () => {
        if (this.authToken) {
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
        } else {
            console.error("拒绝开始连接,授权令牌不存在");
        }
    }

    public disconnect = () => {
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

    private onopen = () => {
        console.log(`WebSocket连接已建立,发送授权令牌`)
        if (this.ws) {
            this.ws.send(`{"Auth-Token":"${this.authToken}"}`)
        }
    }

    private onmessage = (e: MessageEvent) => {
        if (typeof (e.data) === "string") {
            const jsonData = JSON.parse(e.data)
            if (jsonData.verified) {
                this.connectRetryTimes = 0;
                this.connectStatus = WebSocketClientHandler.STATUS_CONNECTED;
                toast.success("WebSocket连接授权成功")
                rpcClientProcess.onConnectd()
            }
        } else {
            const bytes = new Uint8Array(e.data)
            rpcClientProcess.processData(bytes)
        }
    }

    private onclose = (e: CloseEvent) => {
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
        if (e.code === 1000 && e.reason === "节点冲突!") {
            console.log("WebSocket连接已关闭,节点冲突!不再重连!")
            toast.error("WebSocket连接已关闭,节点冲突!不再重连!")
            this.authFailedState = true;
        } else if (e.code === 1003 && e.reason === "登录失败!") {
            console.log("WebSocket连接已关闭,登录失败!不再重连!")
            toast.error("WebSocket连接已关闭,登录失败!不再重连!")
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
    private onerror = (e: Event) => {
        this.connectStatus = WebSocketClientHandler.STATUS_DISCONNECTED;
        console.error(`连接错误`, e)
    }

    public sendData = (data: ArrayBufferLike): boolean => {
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