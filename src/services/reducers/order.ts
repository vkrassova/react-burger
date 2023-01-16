import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from '../actions/order'
import { OrderActions, OrderSate } from '../../types/order'

const initialState = {
  order: null,
  orderRequest: false,
  orderFailed: false,
}

export const orderReducer = (state: OrderSate = initialState, action: OrderActions) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      }
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.payload,
        orderRequest: false,
        orderFailed: false,
      }
    }
    case GET_ORDER_FAILED: {
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
