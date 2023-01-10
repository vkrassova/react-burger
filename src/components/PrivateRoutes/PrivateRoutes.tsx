import { Navigate, Outlet } from 'react-router'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React from 'react'
import { AppRoutes } from '../../constants'
import { useLocation } from 'react-router-dom'

export const PrivateRoutes = () => {
  const location = useLocation()

  const { isAuth } = useTypedSelector((store) => store.user)

  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.SignIn} state={{ from: location }} />
}
