import React, { useState } from 'react'
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'

export const ForgotPassword: React.FC = () => {
  const [email, setValue] = useState('')
  const onChange = (e: { target: { value: string } }) => {
    setValue(e.target.value)
  }

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form>
        <EmailInput value={email} onChange={onChange} extraClass="mb-6" placeholder={'Укажите e-mail'} />
        <Button htmlType={'button'} extraClass="mb-20">
          Восстановить
        </Button>
      </form>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default ">Вспомнили пароль?</p>
        <Link to={AppRoutes.Register} className="text text_type_main-default text_color_accent">
          Войти
        </Link>
      </div>
    </section>
  )
}
