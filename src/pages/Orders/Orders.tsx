import React from 'react'
import { ProfileNav } from '../../components/ProfileNav/ProfileNav'
import style from './Orders.module.scss'

export const Orders: React.FC = () => {
  return (
    <section className={style.wrapper}>
      <ProfileNav />
      <div>История заказов</div>
    </section>
  )
}
