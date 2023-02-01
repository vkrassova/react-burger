import type { Middleware, MiddlewareAPI } from 'redux'
import { RootState, AppDispatch } from '../index'

import {
  wsConnectionSuccess,
  wsConnectionClosed,
  wsConnectionStop,
  wsConnectionError,
  wsConnectionStart,
  wsSendMessage,
  wsGetMessage,
} from '../actions/ws'

export type wsActionsType = {
  wsConnect: typeof wsConnectionStart
  wsDisconnect: typeof wsConnectionStop
  wsSendMessage: typeof wsSendMessage
  onOpen: typeof wsConnectionSuccess
  onClose: typeof wsConnectionClosed
  onError: typeof wsConnectionError
  onMessage: typeof wsGetMessage
}

export const socketMiddleware = (wsActions: wsActionsType): Middleware => {
  return (store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null

    return (next) => (action) => {
      const { dispatch } = store
      const { type, payload } = action
      const { wsConnect, wsDisconnect, onOpen, onError, onClose, onMessage, wsSendMessage } = wsActions

      if (type === wsConnect(payload).type) {
        if (action.payload.token) {
          let accessToken = action.payload.token
          socket = new WebSocket(`${action.payload.url}?token=${accessToken}`)
        } else {
          socket = new WebSocket(action.payload.url)
        }
      }
      if (socket) {
        socket.onopen = () => {
          dispatch(onOpen())
        }

        socket.onerror = (event) => {
          dispatch(onError(event))
        }

        socket.onclose = (event) => {
          event.code !== 1000 ? dispatch(onError(event)) : dispatch(onClose())
        }

        socket.onmessage = (event) => {
          const { data } = event
          const parsedData = JSON.parse(data)
          const { success, ...restParsedData } = parsedData
          dispatch(onMessage(restParsedData))
        }

        if (type === wsSendMessage(payload).type) {
          socket.send(JSON.stringify(payload))
        }

        if (type === wsDisconnect().type) {
          socket.close()
          dispatch(onClose())
        }
      }

      next(action)
    }
  }
}
