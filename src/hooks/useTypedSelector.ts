import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux'
import { RootState } from '../services/store'

export const useTypedSelector: TypedUseSelectorHook<RootState> = selectorHook
