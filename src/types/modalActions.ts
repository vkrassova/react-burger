import { Ingredients } from './data'

export type initialStateAction = {
  item: Ingredients | null
}

type ModalOpenAction = {
  type: 'MODAL_OPEN'
  item: Ingredients
}

export type ModalCloseAction = {
  type: 'MODAL_CLOSE'
}

export type ModalBaseAction = ModalOpenAction | ModalCloseAction
