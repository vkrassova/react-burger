import style from './Modal.module.scss'
import React from 'react'

type ModalOverlayProps = {
  onOverlayClick: () => void
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ onOverlayClick }) => {
  return <div className={style.overlay} onClick={onOverlayClick}></div>
}
