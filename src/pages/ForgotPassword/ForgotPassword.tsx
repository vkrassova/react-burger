import React, { FormEvent } from 'react'
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { forgotPassword } from '../../services/actions/user'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useForm } from '../../hooks/useForm'

export const ForgotPassword: React.FC = () => {
  const dispatch = useAppDispatch()

  const { userData, updateFields } = useForm()

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(forgotPassword(userData))
  }

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form onSubmit={handleFormSubmit}>
        <EmailInput
          value={userData.email}
          onChange={(e) => updateFields({ email: e.target.value })}
          extraClass="mb-6"
          placeholder={'Укажите e-mail'}
        />
        <Button htmlType={'submit'} extraClass="mb-20">
          Восстановить
        </Button>
      </form>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default ">Вспомнили пароль?</p>

        <Link to={AppRoutes.SignIn} className="text text_type_main-default text_color_accent">
          Войти
        </Link>
      </div>
    </section>
  )
}
