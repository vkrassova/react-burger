import { AppDispatch, AppThunk } from '../store'
import { Ingredients } from '../../types/data'
import { getIngredientsRequest } from '../../utils'
import { getIngredientsActions } from '../constants'

export const getIngredientsSuccessActions = (payload: Ingredients[]) => ({
  type: getIngredientsActions.GET_INGREDIENTS_SUCCESS,
  payload,
})

export const getIngredientsRequestActions = () => ({
  type: getIngredientsActions.GET_INGREDIENTS_REQUEST,
})

export const getIngredientsFailedActions = () => ({
  type: getIngredientsActions.GET_INGREDIENTS_FAILED,
})

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngredientsRequestActions)

  return getIngredientsRequest()
    .then((res) => {
      if (res && res.success) {
        dispatch(getIngredientsSuccessActions(res.data))
      }
    })
    .catch(() => {
      dispatch(getIngredientsFailedActions)
    })
}
