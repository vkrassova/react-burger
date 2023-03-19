import React, { PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from './modal-overlay'
import style from './modal.module.scss'

const modalRoot = document.getElementById('react-modals') as HTMLElement

interface ModalsProps extends PropsWithChildren {
  title?: string
  onClose: () => void
}

export const Modal: React.FC<ModalsProps> = ({ title, onClose, children }) => {
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.isComposing || event.key === 'Escape') {
        onClose()
        return
      }
    }

    document.addEventListener('keydown', handleEscKeyPress)

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress)
    }
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onOverlayClick={onClose} />
      <div className={style.popup}>
        <div className={style.container}>
          <div className={style.content}>
            <div className={style.header}>
              <h2 className="text text_type_main-large">{title}</h2>
              <div className={style.closeBtn} onClick={onClose}>
                <CloseIcon type="primary" />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>,
    modalRoot
  )
}
