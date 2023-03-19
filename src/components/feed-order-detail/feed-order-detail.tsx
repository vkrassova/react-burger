import React, { useMemo } from 'react'
import style from './feed-order-detail.module.scss'
import { useTypedSelector } from '../../hooks'
import { useParams } from 'react-router-dom'
import { StatusCodes } from '../../types/data'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { FeedOrderItem } from './components'
import { FormattedDate, Preloader } from '../../components'

export const FeedOrderDetail: React.FC = () => {
  const { messages } = useTypedSelector((store) => store.ws)
  const { ingredients } = useTypedSelector((store) => store.ingredients)
  const { id } = useParams() as { id: string }

  const currentOrder = messages?.orders.find((el) => el._id === id || null)

  const orderArr = useMemo(
    () =>
      Array.from(new Set(currentOrder?.ingredients)).map((item) => ({
        ingredient: ingredients.find(({ _id }) => _id === item),
        count: currentOrder?.ingredients.filter((id) => id === item).length,
      })),
    [currentOrder?.ingredients, ingredients]
  )

  const totalPrice = useMemo(
    () => orderArr.reduce((acc, { ingredient, count }) => acc + (ingredient?.price || 0) * (count || 0), 0),
    [orderArr]
  )

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
            {orderArr.map(
              ({ ingredient, count }) =>
                ingredient && count && <FeedOrderItem element={ingredient} key={ingredient._id} count={count} />
            )}
          </ul>
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.footer}>
          <div className={`text text_color_inactive text_type_main-small`}>
            <FormattedDate date={currentOrder.createdAt} />
          </div>
        </div>

        <div className={style.price}>
          <p className="text text_type_digits-default text_color_primary mr-2">
            <span>{totalPrice}</span>
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  ) : (
    <>
      <p className="text text_type_main-large mb-10 mt-6">Загрузка</p>
      <Preloader />
    </>
  )
}
