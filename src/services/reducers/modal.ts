import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal'
import { Ingredients } from '../../types/data'

type initialStateAction = {
  item: Ingredients | undefined
}

type ModalOpenAction = {
  type: 'MODAL_OPEN'
  item: Ingredients
}

type ModalCloseAction = {
  type: 'MODAL_CLOSE'
  item: Ingredients
}

const initialState = {
  item: undefined,
}

export type ModalBaseAction = ModalOpenAction | ModalCloseAction

export const modalReducer = (state: initialStateAction = initialState, action: ModalBaseAction) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        item: action.item,
      }
    }
    case MODAL_CLOSE: {
      return {
        item: undefined,
      }
    }
    default: {
      return state
    }
  }
}
