import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal'
import {initialStateAction, ModalBaseAction} from '../../types/modalActions'

const initialState = {
  item: null,
}

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
