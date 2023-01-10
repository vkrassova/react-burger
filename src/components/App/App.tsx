import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { AppHeader } from '../AppHeader/AppHeader'
import { getIngredients } from '../../services/actions/ingredients'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { AppRoutes } from '../../constants'
import { Main, Login, Register, Profile, ForgotPassword, ResetPassword, NotFound } from '../../pages'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import useModal from '../../hooks/useModal'
import { getUser } from '../../services/actions/user'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import { MODAL_CLOSE } from '../../services/actions/modal'
import { Feed } from '../../pages/Feed/Feed'
import { Orders } from '../../pages/Orders/Orders'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { toggle } = useModal()

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
  }, [dispatch])

  const location = useLocation()
  const navigate = useNavigate()
  let background = location.state && location.state.background

  const handleModalClose = () => {
    navigate(-1)
    dispatch({
      type: MODAL_CLOSE,
    })
    toggle()
  }

  return (
    <>
      <AppHeader />
      <Routes location={location || background}>
        <Route index path={AppRoutes.Main} element={<Main />} />
        <Route element={<ProtectedRoute userAuthorized={false} />}>
          <Route path={AppRoutes.Profile} element={<Profile />} />
          <Route path={AppRoutes.Feed} element={<Feed />} />
          <Route path={AppRoutes.ProfileOrders} element={<Orders />} />
        </Route>
        <Route element={<ProtectedRoute userAuthorized={true} />}>
          <Route path={AppRoutes.SignIn} element={<Login />} />
          <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword />} />
          <Route path={AppRoutes.Register} element={<Register />} />
        </Route>

        {background ? (
          <Route
            path={AppRoutes.IngredientsId}
            element={
              <Modal onCloseButtonClick={handleModalClose} title="Детали ингридиента">
                <IngredientDetails />
              </Modal>
            }
          />
        ) : (
          <Route path={AppRoutes.IngredientsId} element={<IngredientDetails />} />
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
