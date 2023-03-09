import { AppDispatch, AppThunk } from '../index'
import { getOrderRequest } from '../../utils/api'
import { OrderNumber } from '../../types/responses'
import { orderActions } from '../constants/order'
import { OrderActions } from '../../types/order'

export const orderRequestActions = (): OrderActions => ({
  type: orderActions.GET_ORDER_REQUEST,
})

export const orderSuccessActions = (payload: OrderNumber): OrderActions => ({
  type: orderActions.GET_ORDER_SUCCESS,
  payload,
})

export const orderFailedActions = (): OrderActions => ({
  type: orderActions.GET_ORDER_FAILED,
})

export const postOrder =
  (data: (string | undefined)[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(orderRequestActions())

    return getOrderRequest(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(orderSuccessActions(res.order))
        } else {
          dispatch(orderFailedActions())
        }
      })
      .catch(() => {
        dispatch(orderFailedActions())
      })
  }
