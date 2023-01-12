import React, { FormEvent } from 'react'
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useForm, useAppDispatch } from '../../hooks'
import { signIn } from '../../services/actions/user'
import style from '../styles.module.scss'

export const Login: React.FC = () => {
  const { userData, updateFields, clearFields } = useForm()
  const dispatch = useAppDispatch()

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(signIn(userData)).then((res) => {
      if (res && res.success) {
        clearFields()
      }
    })
  }

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Вход</h2>
      <form onSubmit={handleFormSubmit}>
        <EmailInput
          value={userData.email}
          onChange={(e) => updateFields({ email: e.target.value })}
          extraClass="mb-6"
        />
        <PasswordInput
          value={userData.password}
          onChange={(e) => updateFields({ password: e.target.value })}
          extraClass="mb-6"
        />
        <Button htmlType="submit" extraClass="mb-20">
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
