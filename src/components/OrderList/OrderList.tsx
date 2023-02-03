import React from 'react'
import feed from '../../pages/Feed/Feed.module.scss'
import { useTypedSelector } from '../../hooks'
import { Order } from '../Order/Order'

export const OrderList: React.FC = () => {
  const { messages } = useTypedSelector((store) => store.ws)
  const orders = messages?.orders
  return (
    <>
      {orders ? (
        <div className={`custom-scroll`}>
          <ul className={feed.ordersList}>
            {orders.map((order) => (
              <Order order={order} key={order._id} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  )
}
