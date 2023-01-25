import { initialStateAction, ModalBaseAction } from '../../types/modalActions'
import { modalActions } from '../actions/modal'

const initialState = {
  isActive: false,
}

export const modalReducer = (state: initialStateAction = initialState, action: ModalBaseAction) => {
  switch (action.type) {
    case modalActions.MODAL_OPEN: {
      return {
        isActive: true,
      }
    }
    case modalActions.MODAL_CLOSE: {
      return {
        isActive: false,
      }
    }
    default: {
      return state
    }
  }
}
