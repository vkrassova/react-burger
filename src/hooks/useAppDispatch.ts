import { useDispatch as dispatchHook } from 'react-redux'
import { AppDispatch } from '../services/store'

export const useAppDispatch = () => dispatchHook<AppDispatch>()
