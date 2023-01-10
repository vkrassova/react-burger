import React from 'react'
import { ProfileNav } from '../../components/ProfileNav/ProfileNav'
import style from '../styles.module.scss'

export const Orders: React.FC = () => {
  return (
    <section className={style.wrapper}>
      <ProfileNav />
      История заказов
    </section>
  )
}
