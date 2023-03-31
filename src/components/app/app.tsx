import React, { useCallback, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { getIngredients } from '../../services/actions/ingredients'
import { AppRoutes } from '../../constants'
import {
  ForgotPassword,
  Login,
  Main,
  NotFound,
  Profile,
  Register,
  ResetPassword,
  Feed,
  FeedOrder,
  Order,
  Orders,
} from '../../pages'
import { useAppDispatch } from '../../hooks'
import { getUser } from '../../services/actions/user'
import { AppHeader, ProtectedRoute, Modal, IngredientDetails, FeedOrderDetail } from '../../components'

export interface LocationParams<T> {
  pathname: string
  state: T
  search: string
  hash: string
  key: string
}

interface LocationState {
  background: Location
}

export const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredients())
    dispatch(getUser())
  }, [dispatch])

  const location = useLocation() as LocationParams<LocationState>
  const navigate = useNavigate()

  const background = location.state && location.state.background

  const handleModalClose = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route index path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.Feed} element={<Feed />} />
        <Route path={AppRoutes.FeedId} element={<FeedOrder />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<ProtectedRoute userAuthorized={false} />}>
          <Route path={AppRoutes.Profile} element={<Profile />} />
          <Route path={AppRoutes.ProfileOrders} element={<Orders />} />
          <Route path={AppRoutes.ProfileOrdersId} element={<Order />} />
        </Route>
        <Route element={<ProtectedRoute userAuthorized={true} />}>
          <Route path={AppRoutes.IngredientsId} element={<IngredientDetails />} />
          <Route path={AppRoutes.SignIn} element={<Login />} />
          <Route path={AppRoutes.ForgotPassword} element={<ForgotPassword />} />
          <Route path={AppRoutes.ResetPassword} element={<ResetPassword />} />
          <Route path={AppRoutes.Register} element={<Register />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route
            path={AppRoutes.IngredientsId}
            element={
              <Modal onClose={handleModalClose} title="Детали ингридиента">
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={AppRoutes.ProfileOrdersId}
            element={
              <Modal onClose={handleModalClose}>
                <FeedOrderDetail />
              </Modal>
            }
          />
          <Route
            path={AppRoutes.FeedId}
            element={
              <Modal onClose={handleModalClose}>
                <FeedOrderDetail />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  )
}
