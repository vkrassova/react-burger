import React, { useCallback } from 'react'
import style from './feed-order-detail.module.scss'
import { useTypedSelector } from '../../hooks'
import { useParams } from 'react-router-dom'
import { Ingredients, StatusCodes } from '../../types/data'
import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components'
import { FeedOrderItem } from './components'

export const FeedOrderDetail: React.FC = () => {
  const { messages } = useTypedSelector((store) => store.ws)
  const { ingredients } = useTypedSelector((store) => store.ingredients)
  const { id } = useParams() as { id: string }

  const currentOrder = messages?.orders.find((el) => el._id === id || null)

  const orderArr = ingredients.filter((el) => {
    return currentOrder?.ingredients.includes(el._id)
  })

  const formatDate = (serverDate: string) => {
    return <FormattedDate date={new Date(serverDate)} />
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

  return currentOrder ? (
    <div className={style.container}>
      <div>
        <div className={`${style.number} text text_type_digits-default mb-10`}>{`#${currentOrder.number}`}</div>
        <div className={`text text_type_main-medium mb-3`}>{currentOrder.name}</div>
        <div className={`text text_type_main-default text_color_success mb-15`}>
          {currentOrder.status === StatusCodes.done ? 'Выполнен' : 'Готовится'}
        </div>
      </div>
      <div className={`${style.body} mb-6`}>
        <span className={`text text_type_main-medium mb-6`}>Состав:</span>
      </div>
      <div className={style.wrapper}>
        <div className={style.listWrapper}>
          <ul className={`${style.list} custom-scroll`}>
            {orderArr.map((el, index) => el && <FeedOrderItem element={el} key={index} />)}
          </ul>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.footer}>
          <div className={`text text_color_inactive text_type_main-small`}>
            {currentOrder && formatDate(currentOrder.createdAt)}
          </div>
        </div>

        <div className={style.price}>
          <p className="text text_type_digits-default text_color_primary mr-2">
            <span>{totalPrice()}</span>
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  ) : null
}
