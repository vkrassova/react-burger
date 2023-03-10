import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks'
import { wsConnectionStart, wsConnectionStop } from '../../services/actions/ws'
import { wsUrl } from '../../constants'
import style from './feed-order.module.scss'
import { FeedOrderDetail } from '../../components'

export const FeedOrder: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsConnectionStart(`${wsUrl}/orders/all`))

    return () => {
      dispatch(wsConnectionStop())
    }
  }, [dispatch])

  return (
    <div className={style.wrapper}>
      <FeedOrderDetail />
    </div>
  )
}
