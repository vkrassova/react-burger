import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {compose, createStore, applyMiddleware} from 'redux'
import './index.css'
import App from './components/App/App'
import {rootReducer} from './services/reducers'

const composeEnhancers =
    // @ts-ignore
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        // @ts-ignore
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore(rootReducer, enhancer)

export type AppDispatch = typeof store.dispatch

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)

