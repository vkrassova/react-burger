import { API_ORDER } from '../../constants'
import { checkResponse } from '../../utils/utils'
import { AppDispatch, AppThunk } from '../index'

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'

export const postOrder =
  (data: (string | undefined)[]): AppThunk =>
  (dispatch: AppDispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: data,
      }),
    }

    dispatch({
      type: GET_ORDER_REQUEST,
    })
    fetch(API_ORDER, options)
      .then(checkResponse)
      .then((res) => {
        dispatch({
          type: GET_ORDER_SUCCESS,
          number: res.order.number,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_ORDER_FAILED,
        })
      })
  }
