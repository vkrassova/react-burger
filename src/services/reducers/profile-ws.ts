import { wsProfileActions } from '../constants'
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

export const wsProfileReducer = (state: WSState = initialState, action: WSActions) => {
  switch (action.type) {
    case wsProfileActions.PROFILE_CONNECTION_STOP: {
      return {
        ...state,
        wsConnected: false,
        messages: null,
        error: null,
      }
    }
    case wsProfileActions.PROFILE_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
        error: null,
      }
    }
    case wsProfileActions.PROFILE_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
        error: action.payload,
      }
    }
    case wsProfileActions.PROFILE_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
      }
    }
    case wsProfileActions.PROFILE_GET_MESSAGE: {
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
