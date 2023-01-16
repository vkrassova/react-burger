import { Ingredients } from './data'

export type initialStateAction = {
  isActive: boolean
}

type ModalOpenAction = {
  readonly type: 'MODAL_OPEN'
}

export type ModalCloseAction = {
  readonly type: 'MODAL_CLOSE'
}

export type ModalBaseAction = ModalOpenAction | ModalCloseAction
