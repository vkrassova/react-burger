import {
    ADD_INGREDIENT,
    DELETE_INGREDIENT,
    RESET_INGREDIENTS,
    GET_INGREDIENTS,
    ADD_INGREDIENTS_TO_CONSTRUCTOR, ADD_BUN, MOVE_CARD
} from '../actions/constructor'

import {Ingredients} from '../../types/data'

type AddIngredientAction = {
    type: 'ADD_INGREDIENT' | 'GET_INGREDIENTS',
    ingredientsList: Ingredients[],
}

type AddIngredientToConstructorAction = {
    type: 'ADD_INGREDIENTS_TO_CONSTRUCTOR',
    ingredientsList: Ingredients[],
    data: any
}

type MoveCardAction = {
    type: 'MOVE_CARD',
    data: any,
    // ingredientsList: Ingredients[]
}

type AddBunAction = {
    type: 'ADD_BUN',
    bun: Ingredients[] | null,
    data: any
}

type ConstructorBaseAction = {
    type: 'RESET_INGREDIENTS' | 'DELETE_INGREDIENT'
}

type ConstructorState = {
    ingredientsList: Ingredients[],
    bun: Ingredients[] | null
}

type ConstructorActions = AddIngredientAction | AddBunAction | ConstructorBaseAction | AddIngredientToConstructorAction | MoveCardAction

const initialState = {
    ingredientsList: [],
    bun: []
}

export const constructorReducer = (state: ConstructorState = initialState, action: ConstructorActions) => {
    switch (action.type) {
        case ADD_INGREDIENTS_TO_CONSTRUCTOR: {
            return {
                ...state,
                ingredientsList: [...state.ingredientsList, action.data]
            }
        }
        case ADD_BUN: {
            return {
                ...state,
                bun: action.data
            }
        }

        case MOVE_CARD: {
            const dragCards = [...state.ingredientsList]
            dragCards.splice(action.data.dragIndex, 0,
                dragCards.splice(action.data.hoverIndex, 1)[0])
            return {
                ...state,
                ingredientsList: dragCards
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
