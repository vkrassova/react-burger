import {
  WSConnectionClosed,
  WSConnectionError,
  WSConnectionStart,
  WSConnectionStop,
  WSConnectionSuccess,
  WSGetMessage,
  WSSendMessage,
} from '../../types/wsActions'
import { wsProfileActions } from '../constants'
import { FeedResponse } from '../../types/responses'

export const wsProfileConnectionStart = (payload: string): WSConnectionStart => ({
  type: wsProfileActions.PROFILE_CONNECTION_START,
  payload,
})

export const wsProfileConnectionStop = (): WSConnectionStop => ({
  type: wsProfileActions.PROFILE_CONNECTION_STOP,
})

export const wsProfileConnectionClosed = (): WSConnectionClosed => ({
  type: wsProfileActions.PROFILE_CONNECTION_CLOSED,
})

export const wsProfileConnectionSuccess = (): WSConnectionSuccess => ({
  type: wsProfileActions.PROFILE_CONNECTION_SUCCESS,
})

export const wsProfileConnectionError = (payload: Event): WSConnectionError => ({
  type: wsProfileActions.PROFILE_CONNECTION_ERROR,
  payload,
})

export const wsProfileGetMessage = (payload: FeedResponse): WSGetMessage => ({
  type: wsProfileActions.PROFILE_GET_MESSAGE,
  payload,
})

export const wsProfileSendMessage = (payload: string): WSSendMessage => ({
  type: wsProfileActions.PROFILE_SEND_MESSAGE,
  payload,
})
