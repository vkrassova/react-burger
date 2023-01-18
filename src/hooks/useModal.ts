import { useCallback, useEffect, useState } from 'react'
import { useTypedSelector } from './useTypedSelector'
import { useAppDispatch } from './useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { modalActions } from '../services/actions/modal'

export const useModal = () => {
  const [modalState, setModalState] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { isActive } = useTypedSelector((store) => store.modal)
  const navigate = useNavigate()

  const toggle = useCallback(() => {
    setModalState(!modalState)
  }, [modalState])

  useEffect(() => {
    const closeModalPressEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalState(false)
        dispatch({
          type: modalActions.MODAL_CLOSE,
        })

        if (isActive) {
          navigate(-1)
        }
      }
    }
    document.addEventListener('keyup', closeModalPressEsc)
    return () => {
      document.removeEventListener('keyup', closeModalPressEsc)
    }
  }, [modalState, toggle, isActive])

  return {
    modalState,
    toggle,
  }
}
