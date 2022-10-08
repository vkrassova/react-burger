import {useState, useEffect} from 'react';

const useModal = () => {

    const [modalState, setModalState] = useState(false);

    const toggle = () => {
        setModalState(!modalState)
        console.log(modalState)
    }

    useEffect(() => {
        const closeModalPressEsc = (e: any) => {
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
    }, [modalState])

    return {
        modalState,
        toggle
    }
}

export default useModal;