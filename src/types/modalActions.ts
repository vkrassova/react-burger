import { modalActions } from '../services/actions/modal'

export type initialStateAction = {
  isActive: boolean
}

type ModalAction = {
  readonly type: modalActions
}

export type ModalBaseAction = ModalAction
