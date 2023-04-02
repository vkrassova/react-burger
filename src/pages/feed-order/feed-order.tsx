import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks'
import { wsFeedConnectionStart, wsFeedConnectionStop } from '../../services/actions/feed-ws'
import { wsUrl } from '../../constants'
import style from './feed-order.module.scss'
import { FeedOrderDetail } from '../../components'

export const FeedOrder: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsFeedConnectionStart(`${wsUrl}/orders/all`))

    return () => {
      dispatch(wsFeedConnectionStop())
    }
  }, [dispatch])

  return (
    <div className={style.wrapper}>
      <FeedOrderDetail />
    </div>
  )
}
