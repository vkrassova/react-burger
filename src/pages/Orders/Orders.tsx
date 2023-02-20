import React, { useEffect } from 'react'
import { ProfileNav } from '../../components/ProfileNav/ProfileNav'
import style from './Orders.module.scss'
import { useAppDispatch } from '../../hooks'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/ws'
import { wsUrl } from '../../constants'
import { OrderList } from '../../components/OrderList/OrderList'
import { getAccessToken } from '../../utils/utils'

export const Orders: React.FC = () => {
  const dispatch = useAppDispatch()

  let accessToken = String(getAccessToken()).replace(/^Bearer\s/, '')

  useEffect(() => {
    console.log(accessToken)
    dispatch(wsConnectionStart(`${wsUrl}/orders?token=${accessToken}`))

    return () => {
      dispatch(wsConnectionStop())
    }
  }, [dispatch])
  return (
    <section className={style.wrapper}>
      <ProfileNav />
      <div className="pt-10 pb-10">
        <OrderList />
      </div>
    </section>
  )
}
