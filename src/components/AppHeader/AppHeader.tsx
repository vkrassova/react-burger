import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from '../AppHeader/AppHeader.module.scss'
import { AppRoutes } from '../../constants'

export const AppHeader: React.FC = () => {
  const location = useLocation()

  return (
    <header className={`${styles.headerContainer} mb-10`}>
      <nav className={`${styles.navigation} pt-4 pb-4`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
              to={AppRoutes.Main}
            >
              <BurgerIcon type={location.pathname === AppRoutes.Main ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default pl-2">Конструктор</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
              to={AppRoutes.Feed}
            >
              <ListIcon type={location.pathname === AppRoutes.Feed ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default pl-2">Лента заказов</p>
            </NavLink>
          </li>
        </ul>
        <Logo />
        <NavLink
          className={({ isActive }) => (isActive ? styles.activeLink : styles.notActiveLink)}
          to={AppRoutes.Profile}
        >
          <ProfileIcon type={location.pathname === AppRoutes.Profile ? 'primary' : 'secondary'} />
          <span className="text text_type_main-default pl-2">Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  )
}
