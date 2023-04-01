import {
  WSConnectionClosed,
  WSConnectionError,
  WSConnectionStart,
  WSConnectionStop,
  WSConnectionSuccess,
  WSGetMessage,
  WSSendMessage,
} from '../../types/wsActions'
import { wsFeedActions } from '../constants'
import { FeedResponse } from '../../types/responses'

export const wsFeedConnectionStart = (payload: string): WSConnectionStart => ({
  type: wsFeedActions.FEED_CONNECTION_START,
  payload,
})

export const wsFeedConnectionStop = (): WSConnectionStop => ({
  type: wsFeedActions.FEED_CONNECTION_STOP,
})

export const wsFeedConnectionClosed = (): WSConnectionClosed => ({
  type: wsFeedActions.FEED_CONNECTION_CLOSED,
})

export const wsFeedConnectionSuccess = (): WSConnectionSuccess => ({
  type: wsFeedActions.FEED_CONNECTION_SUCCESS,
})

export const wsFeedConnectionError = (payload: Event): WSConnectionError => ({
  type: wsFeedActions.FEED_CONNECTION_ERROR,
  payload,
})

export const wsFeedGetMessage = (payload: FeedResponse): WSGetMessage => ({
  type: wsFeedActions.FEED_GET_MESSAGE,
  payload,
})

export const wsFeedSendMessage = (payload: string): WSSendMessage => ({
  type: wsFeedActions.FEED_SEND_MESSAGE,
  payload,
})
