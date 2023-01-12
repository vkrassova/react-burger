import { useState, useEffect } from 'react'

export const useModal = () => {
  const [modalState, setModalState] = useState<boolean>(false)

  const toggle = () => {
    setModalState(!modalState)
  }

  useEffect(() => {
    const closeModalPressEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        toggle()
      }
    }
    if (modalState) {
      document.addEventListener('keyup', closeModalPressEsc)
      return () => {
        document.removeEventListener('keyup', closeModalPressEsc)
      }
    }
  }, [modalState, toggle])

  return {
    modalState,
    toggle,
  }
}
