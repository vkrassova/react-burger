import React, { useState } from 'react'
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'

import style from './Login.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'

export const Login: React.FC = () => {
  const [form, setValue] = useState({ email: '', password: '' })

  const onChange = (e: { target: { name: string; value: string } }) => {
    setValue({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section className={style.login}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <form>
        <EmailInput value={form.email} onChange={onChange} extraClass="mb-6" />
        <PasswordInput value={form.password} onChange={onChange} extraClass="mb-6" />
        <Button htmlType={'button'} extraClass="mb-20">
          Войти
        </Button>
      </form>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default ">Вы&nbsp;&mdash; новый пользователь?&nbsp;</p>
        <Link to={AppRoutes.Register} className="text text_type_main-default text_color_accent">
          Зарегистрироваться
        </Link>
      </div>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default ">Забыли пароль?&nbsp;</p>
        <Link to={AppRoutes.ForgotPassword} className="text text_type_main-default text_color_accent">
          Восстановить пароль
        </Link>
      </div>
    </section>
  )
}
