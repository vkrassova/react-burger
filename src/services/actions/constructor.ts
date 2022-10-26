export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const ADD_BUN = "ADD_BUN"
export const DELETE_INGREDIENT = "DELETE_INGREDIENT"
export const RESET_INGREDIENTS = "RESET_INGREDIENTS"
export const GET_INGREDIENTS = "GET_INGREDIENTS"
export const ADD_INGREDIENTS_TO_CONSTRUCTOR = "ADD_INGREDIENTS_TO_CONSTRUCTOR"
export const MOVE_CARD = "MOVE_CARD"

export const addBun = (id: string) => {
    return {
        type: ADD_BUN,
        id
    }
}

export const addIngredients = (id: string) => {
    return {
        type: ADD_INGREDIENTS_TO_CONSTRUCTOR,
        id
    }
}
