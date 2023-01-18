import { AppDispatch, AppThunk } from '../index'
import { getOrderRequest } from '../../utils/api'
import { OrderNumber } from '../../types/responses'

export enum orderActions {
  GET_ORDER_REQUEST = 'GET_ORDER_REQUEST',
  GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS',
  GET_ORDER_FAILED = 'GET_ORDER_FAILED',
}

export const orderRequestActions = () => {
  return {
    type: orderActions.GET_ORDER_REQUEST,
  }
}

export const orderSuccessActions = (payload: OrderNumber) => {
  return {
    type: orderActions.GET_ORDER_SUCCESS,
    payload,
  }
}

export const orderFailedActions = () => {
  return {
    type: orderActions.GET_ORDER_FAILED,
  }
}

export const postOrder =
  (data: (string | undefined)[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(orderRequestActions)

    return getOrderRequest(data)
      .then((res) => {
        dispatch(orderSuccessActions(res.order))
      })
      .catch(() => {
        dispatch(orderFailedActions)
      })
  }
