import React, { useEffect } from 'react'
import feed from './feed.module.scss'
import { wsUrl } from '../../constants'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/ws'
import { useAppDispatch } from '../../hooks'
import { OrderList, OrderStatus } from '../../components'

export const Feed: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`))

    return () => {
      dispatch(wsConnectionStop())
    }
  }, [dispatch])

  return (
    <section className={feed.mainWrapper}>
      <div className={`${feed.wrapper}`}>
        <div className={`${feed.inner}`}>
          <h2 className="text text_type_main-large mb-5">Лента Заказов</h2>
          <div className={feed.listContainer}>
            <OrderList />
          </div>
        </div>
      </div>
      <div className={feed.statusWrapper}>
        <OrderStatus />
      </div>
    </section>
  )
}
