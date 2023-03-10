import { AppDispatch, AppThunk } from '../store'
import { getIngredientsRequest } from '../../utils/api'
import { Ingredients } from '../../types/data'

export enum getIngredientsActions {
  GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST',
  GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS',
  GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED',
}

export const getIngredientsSuccessActions = (payload: Ingredients[]) => {
  return {
    type: getIngredientsActions.GET_INGREDIENTS_SUCCESS,
    payload,
  }
}

export const getIngredientsRequestActions = () => {
  return {
    type: getIngredientsActions.GET_INGREDIENTS_REQUEST,
  }
}

export const getIngredientsFailedActions = () => {
  return {
    type: getIngredientsActions.GET_INGREDIENTS_FAILED,
  }
}

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
