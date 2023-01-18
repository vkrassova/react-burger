import { OrderNumber } from './responses'
import { orderActions } from '../services/actions/order'

type OrderBaseAction = {
  readonly type: orderActions
  payload: OrderNumber
}

export type OrderActions = OrderBaseAction

export type OrderSate = {
  order: null | OrderNumber
  orderRequest: boolean
  orderFailed: boolean
}
