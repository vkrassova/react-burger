import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_FAILED
} from '../actions/order'

type OrderBaseAction = {
    type: 'GET_ORDER_REQUEST' | 'GET_ORDER_FAILED'
}

type OrderSuccessAction = {
    type: 'GET_ORDER_SUCCESS',
    number: number
}

type OrderActions = OrderBaseAction | OrderSuccessAction

type OrderSate = {
    number: number | string,
    orderRequest: boolean,
    orderFailed: boolean,
}

const initialState = {
    number: '',
    orderRequest: false,
    orderFailed: false,
}

export const orderReducer = (state: OrderSate = initialState, action: OrderActions) => {
    switch (action.type) {
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true
            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                number: action.number,
                orderRequest: false,
                orderFailed: false,
            }
        }
        case GET_ORDER_FAILED: {
            return {
                ...state,
                orderFailed: true
            }
        }
        default: {
            return state
        }
    }
}
