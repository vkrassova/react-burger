import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../services'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
