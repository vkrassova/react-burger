import { FeedResponse } from './responses'
import { wsFeedActions, wsProfileActions } from '../services/constants'

export interface WSConnectionStart {
  readonly type: wsFeedActions.FEED_CONNECTION_START | wsProfileActions.PROFILE_CONNECTION_START
  readonly payload: string
}

export interface WSConnectionStop {
  readonly type: wsFeedActions.FEED_CONNECTION_STOP | wsProfileActions.PROFILE_CONNECTION_STOP
}

export interface WSConnectionSuccess {
  readonly type: wsFeedActions.FEED_CONNECTION_SUCCESS | wsProfileActions.PROFILE_CONNECTION_SUCCESS
}

export interface WSConnectionError {
  readonly type: wsFeedActions.FEED_CONNECTION_ERROR | wsProfileActions.PROFILE_CONNECTION_ERROR
  readonly payload: Event
}

export interface WSConnectionClosed {
  readonly type: wsFeedActions.FEED_CONNECTION_CLOSED | wsProfileActions.PROFILE_CONNECTION_CLOSED
}

export interface WSGetMessage {
  readonly type: wsFeedActions.FEED_GET_MESSAGE | wsProfileActions.PROFILE_GET_MESSAGE
  readonly payload: FeedResponse
}

export interface WSSendMessage {
  readonly type: wsFeedActions.FEED_SEND_MESSAGE | wsProfileActions.PROFILE_SEND_MESSAGE
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
