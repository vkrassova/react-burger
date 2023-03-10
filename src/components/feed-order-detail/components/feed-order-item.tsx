import React from 'react'
import style from './feed-order-item.module.scss'
import { Ingredients } from '../../../types/data'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { OrderImage } from '../../order-image'

type FeedOrderItemProps = {
  element: Ingredients
}

export const FeedOrderItem: React.FC<FeedOrderItemProps> = ({ element }) => {
  return (
    <li className={`${style.item}`}>
      <div className={style.imgWrapper}>
        <OrderImage src={element.image} />
      </div>
      <div className={`${style.name} text text_type_main-default`}>{element.name}</div>
      <div className={style.price}>
        {element.type === 'bun' ? (
          <span className={`text text_type_digits-default pr-2`}>2 x {element.price}</span>
        ) : (
          <span className={`text text_type_digits-default pr-2`}>1 x {element.price}</span>
        )}
        <CurrencyIcon type="primary" />
      </div>
    </li>
  )
}
