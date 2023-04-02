import type { Middleware, MiddlewareAPI } from 'redux'
import { RootState, AppDispatch } from '../store'
import {
  wsFeedConnectionStart,
  wsFeedConnectionStop,
  wsFeedConnectionClosed,
  wsFeedConnectionError,
  wsFeedConnectionSuccess,
  wsFeedGetMessage,
  wsFeedSendMessage,
} from '../actions/feed-ws'
import {
  wsProfileConnectionClosed,
  wsProfileConnectionError,
  wsProfileConnectionStart,
  wsProfileConnectionStop,
  wsProfileConnectionSuccess,
  wsProfileGetMessage,
  wsProfileSendMessage,
} from '../actions/profile-ws'

export type wsActionsType = {
  wsConnect: typeof wsFeedConnectionStart | typeof wsProfileConnectionStart
  wsDisconnect: typeof wsFeedConnectionStop | typeof wsProfileConnectionStop
  wsSendMessage: typeof wsFeedSendMessage | typeof wsProfileSendMessage
  onOpen: typeof wsFeedConnectionSuccess | typeof wsProfileConnectionSuccess
  onClose: typeof wsFeedConnectionClosed | typeof wsProfileConnectionClosed
  onError: typeof wsFeedConnectionError | typeof wsProfileConnectionError
  onMessage: typeof wsFeedGetMessage | typeof wsProfileGetMessage
}

export const socketMiddleware = (wsActions: wsActionsType): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    const WS_NORMAL_CLOSE = 1000
    let socket: null | WebSocket = null
    let isConnected: boolean = false
    let reconnectTimer: number = 0
    let timeout: number = 5000

    return (next) => (action) => {
      const { dispatch } = store
      const { type, payload } = action
      const { wsConnect, wsDisconnect, onOpen, onError, onClose, onMessage, wsSendMessage } = wsActions

      if (type === wsConnect(payload).type) {
        socket = new WebSocket(payload)
        isConnected = true
      }

      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen())
        }

        socket.onerror = (event) => {
          dispatch(onError(event))
        }

        socket.onmessage = (event) => {
          const { data } = event
          const parsedData = JSON.parse(data)
          const { success, ...restParsedData } = parsedData

          dispatch(onMessage(restParsedData))
        }

        socket.onclose = (event) => {
          if (event.code !== WS_NORMAL_CLOSE) {
            dispatch(onError(event))
          }

          dispatch(onClose())

          if (isConnected) {
            reconnectTimer = window.setTimeout(() => {
              dispatch(wsConnect(payload))
            }, timeout)
          }
        }

        if (type === wsSendMessage(payload).type) {
          socket.send(JSON.stringify(payload))
        }

        if (type === wsDisconnect().type) {
          if (socket.readyState === 1) {
            clearTimeout(reconnectTimer)
            isConnected = false
            reconnectTimer = 0
            socket.close()
            dispatch(onClose())
          }
        }
      }

      next(action)
    }
  }
}
