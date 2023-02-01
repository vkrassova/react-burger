import React from 'react'
import feed from './Feed.module.scss'
import { Order } from '../../components/Order/Order'
import { OrderStatus } from '../../components/OrderStatus/OrderStatus'

export const Feed: React.FC = () => {
  return (
    <section className={feed.mainWrapper}>
      <div className={`${feed.wrapper} custom-scroll`}>
        <h2 className="text text_type_main-large mb-5">Лента Заказов</h2>
        <div>
          <ul className={feed.ordersList}></ul>
        </div>
      </div>
      <div className={feed.statusWrapper}>
        <OrderStatus />
      </div>
    </section>
  )
}
