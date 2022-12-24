import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import AppHeader from '../AppHeader/AppHeader'
import {getIngredients} from '../../services/actions/ingredients'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {AppRoutes} from '../../constants'
import {Main, Login, Register, Profile, ForgotPassword, ResetPassword, NotFound} from '../../pages'

const App: React.FC = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getIngredients())
    }, [dispatch])

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route index path={AppRoutes.Main} element={<Main/>}/>
                <Route path={AppRoutes.SignIn} element={<Login/>}/>
                <Route path={AppRoutes.Register} element={<Register/>}/>
                <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword/>}/>
                <Route path={AppRoutes.ResetPassword} element={<ResetPassword/>}/>
                <Route path={AppRoutes.Profile} element={<Profile/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
