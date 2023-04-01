import { applyMiddleware, compose, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TApplicationActions } from '../types/reducerActions'
import { rootReducer } from './reducers'
import { socketMiddleware } from './middleware/ws'
import {
  wsConnectionStart,
  wsConnectionError,
  wsConnectionStop,
  wsGetMessage,
  wsSendMessage,
  wsConnectionClosed,
  wsConnectionSuccess,
} from './actions/ws'

import {
  wsFeedConnectionStart,
  wsFeedSendMessage,
  wsFeedGetMessage,
  wsFeedConnectionSuccess,
  wsFeedConnectionError,
  wsFeedConnectionClosed,
  wsFeedConnectionStop,
} from './actions/feed-ws'
import {
  wsProfileConnectionStart,
  wsProfileSendMessage,
  wsProfileGetMessage,
  wsProfileConnectionSuccess,
  wsProfileConnectionStop,
  wsProfileConnectionError,
  wsProfileConnectionClosed,
} from './actions/profile-ws'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const wsActions = {
  wsConnect: wsConnectionStart,
  wsDisconnect: wsConnectionStop,
  wsSendMessage: wsSendMessage,
  onOpen: wsConnectionSuccess,
  onClose: wsConnectionClosed,
  onError: wsConnectionError,
  onMessage: wsGetMessage,
}

const wsFeedActions = {
  wsConnect: wsFeedConnectionStart,
  wsDisconnect: wsFeedConnectionStop,
  wsSendMessage: wsFeedSendMessage,
  onOpen: wsFeedConnectionSuccess,
  onClose: wsFeedConnectionClosed,
  onError: wsFeedConnectionError,
  onMessage: wsFeedGetMessage,
}

const wsProfileActions = {
  wsConnect: wsProfileConnectionStart,
  wsDisconnect: wsProfileConnectionStop,
  wsSendMessage: wsProfileSendMessage,
  onOpen: wsProfileConnectionSuccess,
  onClose: wsProfileConnectionClosed,
  onError: wsProfileConnectionError,
  onMessage: wsProfileGetMessage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsFeedActions), socketMiddleware(wsProfileActions))
)

export const store = createStore(rootReducer, enhancer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>
