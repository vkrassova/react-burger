import { OrderActions } from '../../types/order'
import { OrderNumber } from '../../types/responses'
import { orderActions } from '../constants'
import { initialState, orderReducer } from './order'

describe('Проверяет orderReducer', () => {
  it('Проверка начального состояния', () => {
    expect(orderReducer(undefined, {} as OrderActions)).toEqual(initialState)
  })

  it('Проверка  успешной отправки запроса', () => {
    const action: OrderActions = {
      type: orderActions.GET_ORDER_REQUEST,
    }
    const result = orderReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      orderRequest: true,
    })
  })

  it('Проверка успешного оформления заказа', () => {
    const order: OrderNumber = {
      number: 25088,
    }

    const action: OrderActions = {
      type: orderActions.GET_ORDER_SUCCESS,
      payload: order,
    }

    const result = orderReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      order,
      orderRequest: false,
      orderFailed: false,
    })
  })

  it('Проверка неуспешной отправки запроса', () => {
    const action: OrderActions = {
      type: orderActions.GET_ORDER_FAILED,
    }
    const result = orderReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      orderFailed: true,
    })
  })
})
