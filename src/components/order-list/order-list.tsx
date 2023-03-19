import React from 'react'
import style from './order-list.module.scss'
import { useTypedSelector } from '../../hooks'
import { Order, Preloader } from '../../components'

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
      ) : (
        <Preloader />
      )}
    </>
  )
}
