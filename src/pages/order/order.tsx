import { useAppDispatch } from '../../hooks'
import { getAccessToken } from '../../utils'
import React, { useEffect } from 'react'
import style from '../styles.module.scss'
import { wsProfileConnectionStart, wsProfileConnectionStop } from '../../services/actions/profile-ws'
import { wsUrl } from '../../constants'
import { ProfileOrderDetail } from '../../components'

export const Order: React.FC = () => {
  const dispatch = useAppDispatch()

  let accessToken = String(getAccessToken()).replace(/^Bearer\s/, '')

  useEffect(() => {
    dispatch(wsProfileConnectionStart(`${wsUrl}/orders?token=${accessToken}`))

    return () => {
      dispatch(wsProfileConnectionStop())
    }
  }, [dispatch])

  return (
    <div className={style.orderWrapper}>
      <ProfileOrderDetail />
    </div>
  )
}
