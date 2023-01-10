import React, { FormEvent } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { useForm } from '../../hooks/useForm'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { resetPassword } from '../../services/actions/user'

export const ResetPassword: React.FC = () => {
  const { userData, updateFields } = useForm()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const fromPage = location.state?.from?.pathname || AppRoutes.Main

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(resetPassword(userData))
    navigate(AppRoutes.SignIn)
  }

  const { isAuth, isResetPassword } = useTypedSelector(({ user }) => user)

  if (!isAuth && !isResetPassword) {
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
