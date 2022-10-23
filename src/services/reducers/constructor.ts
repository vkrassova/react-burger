import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    RESET_INGREDIENTS,
    GET_INGREDIENTS,
    ADD_INGREDIENTS_TO_CONSTRUCTOR
} from '../actions/constructor'

import {Ingredients} from '../../types/data'

type AddIngredientAction = {
    type: 'ADD_INGREDIENT' | 'GET_INGREDIENTS',
    ingredientsList: Ingredients[],
}

type AddIngredientToConstructorAction = {
    type: 'ADD_INGREDIENTS_TO_CONSTRUCTOR',
    ingredientsList: Ingredients[],
    lastIndex: number,
    item: any
}

type ConstructorState = {
    ingredientsList: Ingredients[],
    lastIndex: number
}

type AddBunAction = {
    type: 'ADD_BUN',
    bun: Ingredients['_id'] | null,
}

type ConstructorBaseAction = {
    type: 'RESET_INGREDIENTS' | 'DELETE_INGREDIENT'
}

type ConstructorActions = AddIngredientAction | AddBunAction | ConstructorBaseAction | AddIngredientToConstructorAction

const initialState = {
    ingredientsList: [],
    lastIndex: 0
}

export const constructorReducer = (state: ConstructorState = initialState, action: ConstructorActions) => {
    switch (action.type) {
        case ADD_INGREDIENT: {
            return {
                ...state,
                ingredientsList: action.ingredientsList
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredientsList: [
                    // @ts-ignore
                    ...state.ingredientsList.filter((el) => el.id !== action.id)
                ]
            }
        }
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsList: action.ingredientsList
            }
        }
        case ADD_INGREDIENTS_TO_CONSTRUCTOR: {
            const newItem = { ...action.item, id: state.lastIndex + 1 }
            return {
                ...state,
                ingredientsList: [...state. ingredientsList, newItem],
                lastIndex: state.lastIndex + 1
            }
        }
        case RESET_INGREDIENTS: {
            return {
                ...state,
                ingredientsList: [],
            }
        }

        default: {
            return state
        }
    }
}