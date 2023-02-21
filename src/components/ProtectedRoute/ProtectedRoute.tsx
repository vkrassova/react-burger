import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useTypedSelector } from '../../hooks'
import { AppRoutes } from '../../constants'
import { useLocation } from 'react-router-dom'

interface PrivateRoutesProps {
  userAuthorized?: boolean
}

interface LocationParams<T> {
  state: T
}
interface LocationState {
  from: string
}

export const ProtectedRoute = ({ userAuthorized = false }: PrivateRoutesProps) => {
  const location = useLocation() as LocationParams<LocationState>

  const { isAuth, userRequest } = useTypedSelector(({ user }) => user)
  const fromPage = location.state?.from || AppRoutes.Main

  if (userRequest) {
    return null
  }

  if (!userAuthorized && !isAuth) {
    return <Navigate to={AppRoutes.SignIn} state={{ from: location }} />
  }

  if (userAuthorized && isAuth) {
    return <Navigate to={fromPage} state={{from: location}} />
  }

  return <Outlet />
}
