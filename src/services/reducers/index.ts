import { combineReducers } from 'redux'

import {ingredientsReducer} from './ingredients'
import {orderReducer} from './order'
import {constructorReducer} from './constructor'
import {modalReducer} from './modal'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorList: constructorReducer,
    order: orderReducer,
    modal: modalReducer
})

export type RootState = ReturnType<typeof rootReducer>
