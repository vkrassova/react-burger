import { wsActions } from '../services/constants/ws'
import { FeedResponse } from './responses'

export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START'
export const WS_CONNECTION_STOP: 'WS_CONNECTION_STOP' = 'WS_CONNECTION_STOP'
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR'
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED'
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE'
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE'

export interface WSConnectionStart {
  readonly type: typeof WS_CONNECTION_START
  readonly payload: string
}

export interface WSConnectionStop {
  readonly type: typeof WS_CONNECTION_STOP
}

export interface WSConnectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS
}

export interface WSConnectionError {
  readonly type: typeof WS_CONNECTION_ERROR
  readonly payload: Event
}

export interface WSConnectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED
}

export interface WSGetMessage {
  readonly type: typeof WS_GET_MESSAGE
  readonly payload: FeedResponse
}

export interface WSSendMessage {
  readonly type: typeof WS_SEND_MESSAGE
  readonly payload: string
}

export type WSActions =
  | WSConnectionStart
  | WSConnectionStop
  | WSConnectionClosed
  | WSConnectionError
  | WSConnectionSuccess
  | WSGetMessage
  | WSSendMessage
