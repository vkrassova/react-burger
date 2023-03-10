import { OrderNumber } from './responses'
import { orderActions } from '../services/constants'

interface OrderRequest {
  type: orderActions.GET_ORDER_REQUEST
}

interface OrderSuccess {
  readonly type: orderActions.GET_ORDER_SUCCESS
  payload: OrderNumber
}

interface OrderFailed {
  readonly type: orderActions.GET_ORDER_FAILED
}

export type OrderActions = OrderRequest | OrderSuccess | OrderFailed

export type OrderSate = {
  order: null | OrderNumber
  orderRequest: boolean
  orderFailed: boolean
}
