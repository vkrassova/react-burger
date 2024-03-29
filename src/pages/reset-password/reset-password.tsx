import React, { FormEvent } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { resetPassword } from '../../services/actions/user'
import { useAppDispatch, useForm, useTypedSelector } from '../../hooks'
import style from '../styles.module.scss'

export const ResetPassword: React.FC = () => {
  const { userData, updateFields } = useForm()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(resetPassword(userData))
    navigate(AppRoutes.SignIn)
  }

  const { user, isResetPassword } = useTypedSelector(({ user }) => user)

  if (!user && !isResetPassword) {
    return <Navigate to={AppRoutes.ForgotPassword} replace />
  }

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form onSubmit={handleFormSubmit}>
        <PasswordInput
          value={userData.password}
          onChange={(e) => updateFields({ password: e.target.value })}
          placeholder={'Введите новый пароль'}
          extraClass="mb-6"
        />
        <Input
          value={userData.code}
          onChange={(e) => updateFields({ code: e.target.value })}
          placeholder={'Введите код из письма'}
          extraClass="mb-6"
        />
        <Button htmlType={'submit'} extraClass="mb-20">
          Сохранить
        </Button>
      </form>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default">Вспомнили пароль?&nbsp;</p>
        <Link to={AppRoutes.SignIn} className="text text_type_main-default text_color_accent">
          Войти
        </Link>
      </div>
    </section>
  )
}
