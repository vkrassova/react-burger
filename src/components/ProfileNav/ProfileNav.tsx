import React from 'react'
import style from './ProfileNav.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const ProfileNav: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <ul className={style.list}>
      <li className={style.item}>
        <Link to={AppRoutes.Profile}>
          <p className="text text_type_main-medium">Профиль</p>
        </Link>
      </li>
      <li className={style.item}>
        <Link to={AppRoutes.ProfileOrders}>
          <p className="text text_type_main-medium text_color_inactive">История заказов</p>
        </Link>
      </li>
      <li className={style.item}>
        <p className="text text_type_main-medium text_color_inactive">Выход</p>
      </li>
    </ul>
  )
}
