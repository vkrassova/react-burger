import {useState} from 'react';

const useModal = () => {

    const [modalState, setModalState] = useState(false);
    const toggle = () => {
        setModalState(!modalState)
        console.log(modalState)
    }

    return {
        modalState,
        toggle
    }
}

export default useModal;