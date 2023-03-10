import { useAppDispatch } from '../../hooks'
import { getAccessToken } from '../../utils'
import React, { useEffect } from 'react'
import style from '../styles.module.scss'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/ws'
import { wsUrl } from '../../constants'
import { FeedOrderDetail } from '../../components'

export const Order: React.FC = () => {
  const dispatch = useAppDispatch()

  let accessToken = String(getAccessToken()).replace(/^Bearer\s/, '')

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders?token=${accessToken}`))

    return () => {
      dispatch(wsConnectionStop())
    }
  }, [dispatch])

  return (
    <div className={style.orderWrapper}>
      <FeedOrderDetail />
    </div>
  )
}
