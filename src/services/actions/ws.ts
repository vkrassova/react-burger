import {
  WSConnectionClosed,
  WSConnectionError,
  WSConnectionStart,
  WSConnectionStop,
  WSConnectionSuccess,
  WSGetMessage,
  WSSendMessage,
} from '../../types/wsActions'
import { wsActions } from '../constants/ws'
import { FeedResponse } from '../../types/responses'

export const wsConnectionStart = (): WSConnectionStart => {
  return {
    type: wsActions.WS_CONNECTION_START,
    payload: '/all',
  }
}

export const wsConnectionStop = (): WSConnectionStop => {
  return {
    type: wsActions.WS_CONNECTION_STOP,
  }
}

export const wsConnectionClosed = (): WSConnectionClosed => {
  return {
    type: wsActions.WS_CONNECTION_CLOSED,
  }
}

export const wsConnectionSuccess = (): WSConnectionSuccess => {
  return {
    type: wsActions.WS_CONNECTION_SUCCESS,
  }
}

export const wsConnectionError = (payload: Event): WSConnectionError => {
  return {
    type: wsActions.WS_CONNECTION_ERROR,
    payload,
  }
}

export const wsGetMessage = (payload: FeedResponse): WSGetMessage => {
  return {
    type: wsActions.WS_GET_MESSAGE,
    payload,
  }
}

export const wsSendMessage = (payload: string): WSSendMessage => {
  return {
    type: wsActions.WS_SEND_MESSAGE,
    payload,
  }
}
