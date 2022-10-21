import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './reducers'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
export const store = createStore(rootReducer, enhancer)

export type AppDispatch = typeof store.dispatch
