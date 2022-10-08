import style from './Modal.module.scss';

const ModalOverlay = ({onOverlayClick}: any) => {
    return (
        <div className={style.overlay} onClick={onOverlayClick}></div>
    )
}

export default ModalOverlay;