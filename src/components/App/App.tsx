import React, {useEffect} from 'react'
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import {getIngredients} from '../../services/actions/ingredients'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {AppRoutes} from '../../constants'
import {Main, Login, Register, Profile, ForgotPassword, ResetPassword, NotFound} from '../../pages'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import useModal from '../../hooks/useModal'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const {modalState, toggle} = useModal()

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    const { state } = useLocation()

    console.log(state)

    return (
        <>
            <AppHeader/>
            <Routes location={state}>
                <Route index path={AppRoutes.Main} element={<Main/>}/>
                <Route path={AppRoutes.SignIn} element={<Login/>}/>
                <Route path={AppRoutes.Register} element={<Register/>}/>
                <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword/>}/>
                <Route path={AppRoutes.ResetPassword} element={<ResetPassword/>}/>
                <Route path={AppRoutes.Profile} element={<Profile/>}/>
                <Route
                    path={AppRoutes.IngredientsId}
                    element={
                        <Modal onCloseButtonClick={toggle} title="Детали ингридиента">
                            <IngredientDetails/>
                        </Modal>
                    }
                />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
