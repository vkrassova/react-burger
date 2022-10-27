import {API_ORDER} from '../../const'
import {checkResponse} from '../../utils/utils'

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const GET_ORDER_FAILED = 'GET_ORDER_FAILED'

export const postOrder = (data: any) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: data,
        })
    }

    return function (dispatch: Function) {
        dispatch({
            type: GET_ORDER_REQUEST
        })
        fetch(API_ORDER, options)
            .then(checkResponse)
            .then((res) => {
                dispatch({
                    type: GET_ORDER_SUCCESS,
                    number: res.order.number
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_ORDER_FAILED
                })
            })
    }
}
