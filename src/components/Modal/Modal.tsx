import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './ModalOverlay';
const modalRoot = document.getElementById("react-modals") as HTMLElement;

interface ModalsProps {
    title?: string,
    children: React.ReactNode,
    onCloseButtonClick: any
}

const Modal: React.FC<ModalsProps> = ({title, onCloseButtonClick, children}) => {
    return ReactDOM.createPortal(
        <>
            <ModalOverlay/>
            <div className={style.popup}>
                <div className={style.inner}>
                    <div className={style.container}>
                        <div className={style.content}>
                            <div className={style.header}>
                                <h2 className="text text_type_main-large">{title}</h2>
                                <div className={style.closeBtn} onClick={onCloseButtonClick}>
                                    <CloseIcon type="primary"/>
                                </div>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>

            </div>
        </>,
        modalRoot
    )
}

export default Modal;