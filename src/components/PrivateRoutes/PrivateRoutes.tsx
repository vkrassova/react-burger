import { Navigate, Outlet } from 'react-router'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import React from 'react'
import { AppRoutes } from '../../constants'

export const PrivateRoutes: React.FC = () => {
  const { isAuth } = useTypedSelector((store) => store.user)

  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.Main} />
}
