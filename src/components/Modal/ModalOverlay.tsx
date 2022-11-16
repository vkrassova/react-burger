import style from './Modal.module.scss'
import React from 'react'

type ModalOverlayProps = {
  onOverlayClick: () => void
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ onOverlayClick }) => {
  return <div className={style.overlay} onClick={onOverlayClick}></div>
}

export default ModalOverlay
