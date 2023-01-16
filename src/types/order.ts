import { OrderNumber } from './responses'

type OrderBaseAction = {
  readonly type: 'GET_ORDER_REQUEST' | 'GET_ORDER_FAILED'
}

type OrderSuccessAction = {
  readonly type: 'GET_ORDER_SUCCESS'
  payload: OrderNumber
}

export type OrderActions = OrderBaseAction | OrderSuccessAction

export type OrderSate = {
  order: null | OrderNumber
  orderRequest: boolean
  orderFailed: boolean
}
