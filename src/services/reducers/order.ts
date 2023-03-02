import { OrderActions, OrderSate } from '../../types/order'
import {orderActions} from '../constants/order'

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

export const orderReducer = (state: OrderSate = initialState, action: OrderActions) => {
  switch (action.type) {
    case orderActions.GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case orderActions.GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        orderRequest: false,
        orderFailed: false,
      }
    }
    case orderActions.GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
      }
    }
    default: {
      return state
    }
  }
}
