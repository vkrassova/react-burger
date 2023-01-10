import React from 'react'
import style from './ProfileNav.module.scss'
import {NavLink} from 'react-router-dom'
import {AppRoutes} from '../../constants'
import {useAppDispatch} from '../../hooks/useAppDispatch'

export const ProfileNav: React.FC = () => {
    const dispatch = useAppDispatch()

    return (
        <ul className={style.list}>
            <li className={style.item}>
                <NavLink to={AppRoutes.Profile}
                         className={({isActive}) => isActive ? style.activeLink : style.notActiveLink}>
                    <p className="text text_type_main-medium">Профиль</p>
                </NavLink>
            </li>
            <li className={style.item}>
                <NavLink to={AppRoutes.ProfileOrders}
                         className={({isActive}) => isActive ? style.activeLink : style.notActiveLink}
                >
                    <p className="text text_type_main-medium">История заказов</p>
                </NavLink>
            </li>
            <li className={style.item}>
                <p className="text text_type_main-medium text_color_inactive">Выход</p>
            </li>
        </ul>
    )
}
