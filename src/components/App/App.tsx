import React, { useCallback, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { AppHeader } from '../AppHeader/AppHeader'
import { getIngredients } from '../../services/actions/ingredients'
import { AppRoutes } from '../../constants'
import { ForgotPassword, Login, Main, NotFound, Profile, Register, ResetPassword } from '../../pages'
import { useAppDispatch, useModal, useTypedSelector } from '../../hooks'
import { getUser } from '../../services/actions/user'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import { Feed } from '../../pages/Feed/Feed'
import { Orders } from '../../pages/Orders/Orders'
import { IngredientDetails } from '../IngredientDetails/IngredientDetails'
import { Modal } from '../Modal/Modal'
import { modalActions } from '../../services/actions/modal'

export interface LocationParams<T> {
  pathname: string
  state: T
  search: string
  hash: string
  key: string
}

interface LocationState {
  background: string
}

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { toggle } = useModal()

  const { isActive } = useTypedSelector((store) => store.modal)

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
  }, [dispatch])

  const location = useLocation() as LocationParams<LocationState>
  const navigate = useNavigate()

  const background = location.state && location.state.background

  const handleModalClose = useCallback(() => {
    navigate(-1)
    dispatch({
      type: modalActions.MODAL_CLOSE,
    })
    toggle()
  }, [dispatch, navigate, toggle])

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route index path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.IngredientsId} element={<IngredientDetails />} />
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

      {background && isActive && (
        <Routes>
          <Route
            path={AppRoutes.IngredientsId}
            element={
              <Modal onCloseButtonClick={handleModalClose} title="Детали ингридиента">
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  )
}

export default App
