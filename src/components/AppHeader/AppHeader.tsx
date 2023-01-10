import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from '../AppHeader/AppHeader.module.scss'
import { AppRoutes } from '../../constants'

export const AppHeader: React.FC = () => {
  return (
    <header className={`${styles.headerContainer} mb-10`}>
      <nav className={`${styles.navigation} pt-4 pb-4`}>
        <ul className={styles.navigation__list}>
          <li>
            <NavLink className={`${styles.links} pr-5 mr-2`} to={AppRoutes.Main}>
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default pl-2 text_color_primary">Конструктор</p>
            </NavLink>
          </li>
          <li>
            <NavLink className={`${styles.links} pr-5 pl-5`} to={AppRoutes.Feed}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default text_color_inactive pl-2">Лента заказов</p>
            </NavLink>
          </li>
        </ul>
        <Logo />
        <NavLink className={`${styles.links} pl-5 pr-5`} to={AppRoutes.Profile}>
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive pl-2">Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  )
}
