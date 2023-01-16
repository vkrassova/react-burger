import { Ingredients } from './data'

export type initialStateAction = {
  item: Ingredients | null
}

type ModalOpenAction = {
  readonly type: 'MODAL_OPEN'
  item: Ingredients
}

export type ModalCloseAction = {
  readonly type: 'MODAL_CLOSE'
}

export type ModalBaseAction = ModalOpenAction | ModalCloseAction
