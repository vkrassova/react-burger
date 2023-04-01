import React, { useEffect } from 'react'
import feed from './feed.module.scss'
import { wsUrl } from '../../constants'
import { wsFeedConnectionStart, wsFeedConnectionStop } from '../../services/actions/feed-ws'
import { useAppDispatch, useTypedSelector } from '../../hooks'
import { Order, OrderStatus, Preloader } from '../../components'

export const Feed: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsFeedConnectionStart(`${wsUrl}/orders/all`))

    return () => {
      dispatch(wsFeedConnectionStop())
    }
  }, [dispatch])

  const { messages } = useTypedSelector((store) => store.feedWS)
  const orders = messages?.orders

  return (
    <section className={feed.mainWrapper}>
      <div className={`${feed.wrapper}`}>
        <div className={`${feed.inner}`}>
          <h2 className="text text_type_main-large mb-5">Лента Заказов</h2>
          <div className={feed.listContainer}>
            {orders ? (
              <ul className={feed.list}>
                {orders.map((order) => (
                  <Order order={order} key={order._id} />
                ))}
              </ul>
            ) : (
              <Preloader />
            )}
          </div>
        </div>
      </div>
      <div className={feed.statusWrapper}>
        <OrderStatus />
      </div>
    </section>
  )
}
