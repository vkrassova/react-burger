import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal'
import { Ingredients } from '../../types/data'

type initialStateAction = {
  item: Ingredients | null
}

type ModalOpenAction = {
  type: 'MODAL_OPEN'
  item: Ingredients
}

type ModalCloseAction = {
  type: 'MODAL_CLOSE'
}

const initialState = {
  item: null,
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
        item: null,
      }
    }
    default: {
      return state
    }
  }
}
