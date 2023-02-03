import React from 'react'
import style from './Order.module.scss'
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'
import {OrderImage} from '../OrderImage/OrderImage'
import {Link, useLocation} from 'react-router-dom'
import {Orders} from '../../types/data'
import {useTypedSelector} from '../../hooks'

type TOrder = {
    order: Orders
}

export const Order: React.FC<TOrder> = ({order}) => {
    const location = useLocation()
    const { ingredients } = useTypedSelector((store) => store.ingredients)

    const orderArr = ingredients.filter((el) => {
        return order.ingredients.includes(el._id)
    })

    const formatDate = (serverDate: string) => {
        return <FormattedDate date={new Date(serverDate)} />
    }

    const maxLength = orderArr.length - 5

    return (
        <Link key={order._id}
              to={{
                  pathname: `/feed/${order._id}`,
              }}
              state={{background: location}}
              className={style.link}>
            <li className={style.wrapper}>
                <div className={style.info}>
                    <span className="text text_type_main-small text_color_primary">#{order.number}</span>
                    <span className="text text_type_main-small text_color_inactive">{formatDate(order.createdAt)}</span>
                </div>
                <h3 className="text text_type_main-medium text_color_primary mb-6">{order.name}</h3>
                <div className={style.ingredients}>
                    <ul className={style.list}>
                            {
                                orderArr.map((el, index) => (
                                    el && (
                                        <OrderImage
                                            src={el.image}
                                            key={index}
                                            {...(maxLength > 0  ? {count: order.ingredients.length - 6 + 1} : {})}
                                            />
                                    )
                                ))
                            }
                    </ul>
                    <div className={style.price}>
                        <p className="text text_type_digits-default text_color_primary mr-2">400</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </li>
        </Link>
    )
}
