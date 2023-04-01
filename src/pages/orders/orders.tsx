import React, { useEffect } from 'react'
import style from './orders.module.scss'
import { useAppDispatch, useTypedSelector } from '../../hooks'
import { wsProfileConnectionStart, wsProfileConnectionStop } from '../../services/actions/profile-ws'
import { wsUrl } from '../../constants'
import { Order, Preloader, ProfileNav } from '../../components'
import { getAccessToken } from '../../utils'
import feed from '../feed/feed.module.scss'

export const Orders: React.FC = () => {
  const dispatch = useAppDispatch()

  const accessToken = String(getAccessToken()).replace(/^Bearer\s/, '')

  useEffect(() => {
    dispatch(wsProfileConnectionStart(`${wsUrl}/orders?token=${accessToken}`))

    return () => {
      dispatch(wsProfileConnectionStop())
    }
  }, [dispatch])

  const { messages } = useTypedSelector((store) => store.profileWS)
  const orders = messages?.orders

  return (
    <section className={style.wrapper}>
      <ProfileNav />
      <div className={style.ordersWrapper}>
        {orders ? (
          <ul className={style.list}>
            {orders.map((order) => (
              <Order order={order} key={order._id} />
            ))}
          </ul>
        ) : (
          <Preloader />
        )}
      </div>
    </section>
  )
}
