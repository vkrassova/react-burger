import React, { useEffect } from 'react'
import style from './orders.module.scss'
import { useAppDispatch } from '../../hooks'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/ws'
import { wsUrl } from '../../constants'
import { OrderList, ProfileNav } from '../../components'
import { getAccessToken } from '../../utils'

export const Orders: React.FC = () => {
  const dispatch = useAppDispatch()

  let accessToken = String(getAccessToken()).replace(/^Bearer\s/, '')

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders?token=${accessToken}`))

    return () => {
      dispatch(wsConnectionStop())
    }
  }, [dispatch])
  return (
    <section className={style.wrapper}>
      <ProfileNav />
      <div className={style.ordersWrapper}>
        <OrderList />
      </div>
    </section>
  )
}
