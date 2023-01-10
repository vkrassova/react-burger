import React from 'react'
import style from './ProfileNav.module.scss'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { signOut } from '../../services/actions/user'

export const ProfileNav: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogOut = async (evt: { preventDefault: () => void }) => {
    evt.preventDefault()
    await dispatch(signOut())
    navigate(AppRoutes.SignIn)
  }

  return (
    <ul className={style.list}>
      <li className={style.item}>
        <NavLink
          to={AppRoutes.Profile}
          className={({ isActive }) => (isActive ? style.activeLink : style.notActiveLink)}
        >
          <p className="text text_type_main-medium">Профиль</p>
        </NavLink>
      </li>
      <li className={style.item}>
        <NavLink
          to={AppRoutes.ProfileOrders}
          className={({ isActive }) => (isActive ? style.activeLink : style.notActiveLink)}
        >
          <p className="text text_type_main-medium">История заказов</p>
        </NavLink>
      </li>
      <li className={style.item}>
        <a className="text text_type_main-medium text_color_inactive" onClick={handleLogOut}>
          Выход
        </a>
      </li>
    </ul>
  )
}
