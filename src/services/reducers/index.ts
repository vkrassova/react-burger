import { combineReducers } from 'redux'

import {ingredientsReducer} from './ingredients'
import {orderReducer} from './order'
import {constructorReducer} from './constructor';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorList: constructorReducer,
    order: orderReducer
})

export type RootState = ReturnType<typeof rootReducer>
