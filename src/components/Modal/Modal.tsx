import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './ModalOverlay';
const modalRoot = document.getElementById("react-modals") as HTMLElement;

interface ModalsProps {
    title?: string
    children: React.ReactNode
}

const Modal: React.FC<ModalsProps> = ({title, children}) => {
    return ReactDOM.createPortal(
        <>
            <ModalOverlay/>
            <div className={style.popup}>
                <div className={style.content}>
                    <div className={style.closeBtn}>
                        <CloseIcon type="primary"/>
                    </div>
                    <h2 className="text text_type_main-large">{title}</h2>
                    {children}
                </div>
            </div>
        </>,
        modalRoot
    )
}

export default Modal;