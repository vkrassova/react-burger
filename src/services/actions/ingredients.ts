import {API_INGREDIENTS} from '../../const'
import {checkResponse} from '../../utils/utils'

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST"
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS"
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED"

export const getIngredients = () => {
    return function (dispatch: Function) {
        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })
        fetch(API_INGREDIENTS)
            .then(checkResponse)
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    ingredients: res.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
                console.log(error)
            })
    }
}
