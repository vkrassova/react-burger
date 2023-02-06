import React, {useCallback} from 'react'
import style from './Order.module.scss'
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'
import {OrderImage} from '../OrderImage/OrderImage'
import {Link, useLocation} from 'react-router-dom'
import {Ingredients, Orders} from '../../types/data'
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

    const totalPrice = useCallback(() => {
        let totalToppingsPrice = 0
        if(orderArr.length > 0) {
            totalToppingsPrice = orderArr.reduce((acc: number, curr: Ingredients) => {
                return acc + curr.price
            }, 0)
        }

        const bun = orderArr.find((el) => {
            return el.type === 'bun'
        })

        const totalBunPrice = bun ? bun.price : 0

        return totalBunPrice + totalToppingsPrice

    }, [orderArr])

    const maxLength = 6

    return (
        <Link key={order._id}
              to={{
                  pathname: `${location.pathname}/${order._id}`,
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
                                            {...(order.ingredients.length > maxLength && index === maxLength - 1
                                                ? { count: order.ingredients.length - maxLength + 1 } : {})}
                                            />
                                    )
                                ))
                            }
                    </ul>
                    <div className={style.price}>
                        <p className="text text_type_digits-default text_color_primary mr-2">
                            <span>{totalPrice()}</span>
                        </p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </li>
        </Link>
    )
}
