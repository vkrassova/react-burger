import {
  WSConnectionClosed,
  WSConnectionError,
  WSConnectionStart,
  WSConnectionStop,
  WSConnectionSuccess,
  WSGetMessage,
  WSSendMessage,
} from '../../types/wsActions'
import { wsActions } from '../constants'
import { FeedResponse } from '../../types/responses'

export const wsConnectionStart = (payload: string): WSConnectionStart => ({
  type: wsActions.WS_CONNECTION_START,
  payload,
})

export const wsConnectionStop = (): WSConnectionStop => ({
  type: wsActions.WS_CONNECTION_STOP,
})

export const wsConnectionClosed = (): WSConnectionClosed => ({
  type: wsActions.WS_CONNECTION_CLOSED,
})

export const wsConnectionSuccess = (): WSConnectionSuccess => ({
  type: wsActions.WS_CONNECTION_SUCCESS,
})

export const wsConnectionError = (payload: Event): WSConnectionError => ({
  type: wsActions.WS_CONNECTION_ERROR,
  payload,
})

export const wsGetMessage = (payload: FeedResponse): WSGetMessage => ({
  type: wsActions.WS_GET_MESSAGE,
  payload,
})

export const wsSendMessage = (payload: string): WSSendMessage => ({
  type: wsActions.WS_SEND_MESSAGE,
  payload,
})
