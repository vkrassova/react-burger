import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux'
import { RootState } from '../services'

export const useTypedSelector: TypedUseSelectorHook<RootState> = selectorHook
