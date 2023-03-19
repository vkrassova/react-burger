import React from 'react'
import style from './order-details.module.scss'
import IconDone from './../../images/done.png'
import { OrderNumber } from '../../types/responses'

export const OrderDetails: React.FC<OrderNumber> = ({ number }) => {
  return (
    <>
      <span className={`${style.orderCount} text text_type_digits-large mb-8`}>{number}</span>
      <p className="text text_type_main-default mb-15">идентификатор заказа</p>
      <div className={style.icon}>
        <img src={IconDone} alt="done" />
      </div>
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  )
}
