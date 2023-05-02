import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './app-header.module.scss'
import { AppRoutes } from '../../constants'
import { useTypedSelector } from '../../hooks'

export const AppHeader: React.FC = () => {
  const location = useLocation()
  const { user, userRequest } = useTypedSelector(({ user }) => user)

  const isAuth = !userRequest && user?.name !== ''

  return (
    <header className={`${styles.headerContainer} mb-10`}>
      <nav className={`${styles.navigation} pt-4 pb-4`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
              to={AppRoutes.Main}
            >
              <BurgerIcon type={'secondary'} />
              <p className="text text_type_main-default pl-2">Конструктор</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
              to={AppRoutes.Feed}
            >
              <ListIcon type={'secondary'} />
              <p className="text text_type_main-default pl-2">Лента заказов</p>
            </NavLink>
          </li>
        </ul>
        <Logo />
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to={AppRoutes.Profile}
        >
          <ProfileIcon
            type={
              location.pathname === AppRoutes.ProfileOrders || location.pathname === AppRoutes.Profile
                ? 'primary'
                : 'secondary'
            }
          />
          {isAuth && <span className="text text_type_main-default pl-2">{user?.name || 'Личный кабинет'}</span>}
        </NavLink>
      </nav>
    </header>
  )
}
