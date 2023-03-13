import React, { useCallback } from 'react'
import style from './order.module.scss'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation } from 'react-router-dom'
import { Ingredients, Orders, StatusCodes } from '../../types/data'
import { useTypedSelector } from '../../hooks'
import { OrderImage, FormattedDate } from '../../components'

type TOrder = {
  order: Orders
}

export const Order: React.FC<TOrder> = ({ order }) => {
  const location = useLocation()
  const { ingredients } = useTypedSelector((store) => store.ingredients)

  const orderArr = ingredients.filter((el) => {
    return order.ingredients.includes(el._id)
  })

  const orderStatus = (status: string) => {
    if (status === StatusCodes.created) {
      return 'Создан'
    }
    if (status === StatusCodes.pending) {
      return 'Готовится'
    }
    if (status === StatusCodes.done) {
      return 'Выполнен'
    }
    return ''
  }

  const totalPrice = useCallback(() => {
    let totalToppingsPrice = 0
    if (orderArr.length > 0) {
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
    <Link
      key={order._id}
      to={{
        pathname: `${location.pathname}/${order._id}`,
      }}
      state={{ background: location }}
      className={style.link}
    >
      <li className={style.wrapper}>
        <div className={style.info}>
          <span className="text text_type_digits-default text_color_primary">#{order.number}</span>
          <span className="text text_type_main-small text_color_inactive">
            <FormattedDate date={order.createdAt} />
          </span>
        </div>
        <h3 className="text text_type_main-medium text_color_primary mb-2">{order.name}</h3>
        <div className={`text text_type_main-default text_color_success mb-6`}>{orderStatus(order.status)}</div>
        <div className={style.ingredients}>
          <div className={style.list}>
            {orderArr
              .slice(0, maxLength)
              .map(
                (el, index) =>
                  el && (
                    <OrderImage
                      src={el.image}
                      key={index}
                      {...(order.ingredients.length > maxLength && index === maxLength - 1
                        ? { count: order.ingredients.length - maxLength + 1 }
                        : null)}
                    />
                  )
              )}
          </div>
          <div className={style.price}>
            <p className="text text_type_digits-default text_color_primary mr-2">
              <span>{totalPrice()}</span>
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </li>
    </Link>
  )
}
