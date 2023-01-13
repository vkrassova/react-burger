import { AppDispatch, AppThunk } from '../index'
import { getOrderRequest } from '../../utils/api'

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'

export const postOrder =
  (data: (string | undefined)[]): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    })

    return getOrderRequest(data)
      .then((res) => {
        console.log(res)
        dispatch({
          type: GET_ORDER_SUCCESS,
          payload: res.order,
        })
      })
      .catch(() => {
        dispatch({
          type: GET_ORDER_FAILED,
        })
      })
  }
