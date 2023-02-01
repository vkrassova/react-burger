import React from 'react'
import style from './Order.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation } from 'react-router-dom'
import { Orders } from '../../types/data'
import {useSelector} from 'react-redux';
import {useTypedSelector} from '../../hooks';

type TOrder = {
  order: Orders
}

export const Order: React.FC<TOrder> = ({ order }) => {
  const location = useLocation()
  const { messages } = useTypedSelector((store) => store.ws)

  console.log(messages)

  return (
    <Link key={order._id} to={'/'} state={{ background: location }} className={style.link}>
      <li className={style.wrapper}>
        <div className={style.info}>
          <span className="text text_type_main-small text_color_primary">#{order.number}</span>
          <span className="text text_type_main-small text_color_inactive">Сегодня, 16:20</span>
        </div>
        <h3 className="text text_type_main-medium text_color_primary mb-6">Death Star Starship Main бургер</h3>
        {/*<p className="text text_type_main-small mb-6"></p>*/}
        <div className={style.ingredients}>
          <ul className={style.list}>
            <li>
              <p className={`text text_type_digits-default text_color_primary`}></p>
              <div className={style.imgWrapper}>
                <div className=""></div>
                <img className="" alt="Картинка ингредиента" />
              </div>
            </li>
            <li>
              <p className={`text text_type_digits-default text_color_primary`}></p>
              <div className={style.imgWrapper}>
                <div className=""></div>
                <img className="" alt="Картинка ингредиента" />
              </div>
            </li>
          </ul>
          <div className={style.price}>
            <p className="text text_type_digits-default text_color_primary mr-2">400</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  )
}
