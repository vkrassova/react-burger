import {MODAL_OPEN, MODAL_CLOSE} from '../actions/modal'
import {Ingredients} from '../../types/data';

type initialStateAction = {
    modalData: null | Ingredients,
}

type ModalOpenAction = {
    type: 'MODAL_OPEN',
    item: Ingredients
}

type ModalCloseAction = {
    type: 'MODAL_CLOSE',
    item: Ingredients
}

const initialState = {
    modalData: null,
}

type ModalBaseAction = ModalOpenAction | ModalCloseAction

export const modalReducer = (state: initialStateAction = initialState, action: ModalBaseAction) => {
    switch (action.type) {
        case MODAL_OPEN: {
            return {
                item: action.item
            };
        }
        case MODAL_CLOSE: {
            return {
                item: null
            };
        }
        default: {
            return state;
        }
    }
};
