import { MODAL_OPEN, MODAL_CLOSE } from '../actions/modal'
import { initialStateAction, ModalBaseAction } from '../../types/modalActions'

const initialState = {
  isActive: false,
}

export const modalReducer = (state: initialStateAction = initialState, action: ModalBaseAction) => {
  switch (action.type) {
    case MODAL_OPEN: {
      return {
        isActive: true,
      }
    }
    case MODAL_CLOSE: {
      return {
        isActive: false,
      }
    }
    default: {
      return state
    }
  }
}
