import { ingredientsReducer, initialState } from './ingredients'
import { getIngredientsActions } from '../constants'
import { IngredientsActions } from '../../types/ingredientsActions'
import { Ingredients } from '../../types/data'

describe('Проверка ingredientsReducer', () => {
  it('Проверка начального состояния', () => {
    expect(ingredientsReducer(undefined, {} as IngredientsActions)).toEqual(initialState)
  })

  it('Проверка успешной отправки запроса', () => {
    const action: IngredientsActions = {
      type: getIngredientsActions.GET_INGREDIENTS_REQUEST,
    }

    const result = ingredientsReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsRequest: true,
    })
  })

  it('Проверка успешного получения ингредиентов', () => {
    const ingredients: Ingredients[] = [
      {
        _id: '60d3b41abdacab0026a733c7',
        name: 'Флюоресцентная булка R2-D3',
        type: 'bun',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
        __v: 0,
      },
      {
        _id: '60d3b41abdacab0026a733c8',
        name: 'Филе Люминесцентного тетраодонтимформа',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
        __v: 0,
      },
    ]

    const action: IngredientsActions = {
      type: getIngredientsActions.GET_INGREDIENTS_SUCCESS,
      payload: ingredients,
    }

    const result = ingredientsReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      ingredients: ingredients,
      ingredientsRequest: false,
      ingredientsFailed: false,
    })
  })

  it('Проверка неуспешной отправки запроса', () => {
    const action: IngredientsActions = {
      type: getIngredientsActions.GET_INGREDIENTS_FAILED,
    }

    const result = ingredientsReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsFailed: true,
    })
  })
})
