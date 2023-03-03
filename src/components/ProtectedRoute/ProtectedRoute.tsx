import React, {useEffect, useState} from 'react'
import { Navigate, Outlet } from 'react-router'
import {useAppDispatch, useTypedSelector} from '../../hooks'
import { AppRoutes } from '../../constants'
import { useLocation } from 'react-router-dom'
import {getIngredients} from '../../services/actions/ingredients';
import {getUser} from '../../services/actions/user';

interface PrivateRoutesProps {
  userAuthorized?: boolean
}

interface LocationParams<T> {
  state: T
}
interface LocationState {
  from: {
    pathname: string
  }
}

export const ProtectedRoute = ({ userAuthorized}: PrivateRoutesProps) => {
  const location = useLocation() as LocationParams<LocationState>
  const dispatch = useAppDispatch()

  const { user } = useTypedSelector(({ user }) => user)
  const fromPage = location.state?.from?.pathname || AppRoutes.Main

  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    dispatch(getUser()).finally(() => {
      setAuth(true)
    })
  }, [dispatch])

  if(!isAuth) {
    return null
  }

  if (!userAuthorized && !user) {
    return <Navigate to={AppRoutes.SignIn} state={{ from: location }} />
  }

  if (userAuthorized && user) {
    return <Navigate to={fromPage} replace />
  }

  return <Outlet />
}
