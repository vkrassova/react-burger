export interface Ingredients {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

export interface IngredientCategory {
    _id?: string,
    name: string,
    type?: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile?: string,
    image_large?: string,
    __v?: number
}

export interface CategoryIngredient {
    ingredient: Ingredients
}

export type BurgerIngredientsProps = {
    ingredients: Ingredients[]
}

