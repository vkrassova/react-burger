import { wsFeedActions } from '../constants'
import { WSActions } from '../../types/wsActions'
import { FeedResponse } from '../../types/responses'

type WSState = {
  wsConnected: boolean
  messages: null | FeedResponse
  error?: null | Event
}

export const initialState = {
  wsConnected: false,
  messages: null,
}

export const wsFeedReducer = (state: WSState = initialState, action: WSActions) => {
  switch (action.type) {
    case wsFeedActions.FEED_CONNECTION_START: {
      return {
        ...state,
        wsConnected: false,
        messages: null,
        error: null,
      }
    }
    case wsFeedActions.FEED_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
        error: null,
      }
    }
    case wsFeedActions.FEED_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      }
    }
    case wsFeedActions.FEED_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
      }
    }
    case wsFeedActions.FEED_GET_MESSAGE: {
      return {
        ...state,
        error: null,
        messages: { ...action.payload },
      }
    }
    default: {
      return state
    }
  }
}
