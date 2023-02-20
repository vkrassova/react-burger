import React from 'react'
import style from './OrderList.module.scss'
import { useTypedSelector } from '../../hooks'
import { Order } from '../Order/Order'

export const OrderList: React.FC = () => {
  const { messages } = useTypedSelector((store) => store.ws)
  const orders = messages?.orders
  return (
    <>
      {orders ? (
        <ul className={style.list}>
          {orders.map((order) => (
            <Order order={order} key={order._id} />
          ))}
        </ul>
      ) : null}
    </>
  )
}
