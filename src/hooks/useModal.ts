import { useCallback, useState } from 'react'

export const useModal = () => {
  const [modalState, setModalState] = useState<boolean>(false)

  const toggle = useCallback(() => {
    setModalState(!modalState)
  }, [modalState])

  return {
    modalState,
    toggle,
  }
}
