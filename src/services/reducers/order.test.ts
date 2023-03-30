import {OrderActions} from "../../types/order"

import {orderActions} from "../constants";

import {orderReducer, initialState} from "./order"

import {orderRequestActions} from "../actions/order";

describe('Проверяет orderReducer', () => {
  it('Проверка начального состояния', () => {
    expect(orderReducer(undefined, {} as OrderActions)).toEqual(initialState)
  });

  it('Проверка отправки запроса', () => {
    const action = {
      type: orderActions.GET_ORDER_REQUEST
    }
    expect(orderRequestActions()).toEqual(action)
  });
})