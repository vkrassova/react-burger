import { constructorReducer, initialState } from './constructor'
import { constructorActions } from '../constants'
import { ConstructorActions } from '../../types/constructorActions'
import { Ingredients } from '../../types/data'
import { v4 as uuidv4 } from 'uuid'

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

describe('Проверка constructorReducer', () => {
  it('Проверка начального состояния', () => {
    expect(constructorReducer(undefined, {} as ConstructorActions)).toEqual(initialState)
  })

  it('Проверка добовления булки', () => {
    const bun = ingredients.filter(({ type }) => type === 'bun')[0]
    const key = uuidv4()

    const action: ConstructorActions = {
      type: constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR,
      item: { ...bun, key },
    }

    const result = constructorReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      bun: { ...bun, key },
    })
  })

  it('Проверка добавления ингредиента в конструктор', () => {
    const ingredient = ingredients.filter(({ type }) => type !== 'bun')[0]
    const key = uuidv4()

    const action: ConstructorActions = {
      type: constructorActions.ADD_INGREDIENTS_TO_CONSTRUCTOR,
      item: { ...ingredient, key },
    }

    const result = constructorReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsList: [{ ...ingredient, key }],
    })
  })

  it('Проверка перемещения ингредиента', () => {
    const key = uuidv4()
    const ingredientsWithKeys = ingredients
      .filter(({ type }) => type !== 'bun')
      .map((el) => ({
        ...el,
        key,
      }))

    const state = {
      ...initialState,
      ingredientsList: ingredientsWithKeys,
    }

    const dragIndex = 1
    const hoverIndex = 0

    const action: ConstructorActions = {
      type: constructorActions.MOVE_CARD,
      dragIndex: dragIndex,
      hoverIndex: hoverIndex,
    }

    const dragCards = [...ingredientsWithKeys]
    dragCards.splice(hoverIndex, 0, dragCards.splice(dragIndex, 1)[0])

    const result = constructorReducer(state, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsList: dragCards,
    })
  })

  it('Проверка удаления ингредиентов', () => {
    const key = uuidv4()
    const ingredientsWithKeys = ingredients
      .filter(({ type }) => type !== 'bun')
      .map((el) => ({
        ...el,
        key,
      }))

    const id = ingredientsWithKeys[0].key

    const state = {
      ...initialState,
      ingredientsList: ingredientsWithKeys,
    }

    const action: ConstructorActions = {
      type: constructorActions.DELETE_INGREDIENT,
      id: id,
    }

    const result = constructorReducer(state, action)

    expect(result).toEqual({
      ...state,
      ingredientsList: [...state.ingredientsList.filter((el) => el.id !== id)],
    })
  })

  it('Проверка сброса списка ингредиентов', () => {
    const action: ConstructorActions = {
      type: constructorActions.RESET_INGREDIENTS,
    }

    const result = constructorReducer(initialState, action)

    expect(result).toEqual({
      ...initialState,
      ingredientsList: [],
      bun: null,
    })
  })
})
