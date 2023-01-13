import { GET_ORDER_REQUEST, GET_ORDER_SUCCESS, GET_ORDER_FAILED } from '../actions/order'

type OrderBaseAction = {
  readonly type: 'GET_ORDER_REQUEST' | 'GET_ORDER_FAILED'
}

export type OrderNumber = {
  number: number | undefined
}

type OrderSuccessAction = {
  readonly type: 'GET_ORDER_SUCCESS'
  payload: OrderNumber
}

export type OrderActions = OrderBaseAction | OrderSuccessAction

type OrderSate = {
  order: null | OrderNumber
  orderRequest: boolean
  orderFailed: boolean
}

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
