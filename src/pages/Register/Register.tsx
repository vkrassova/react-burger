import React, { FormEvent } from 'react'
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useForm } from '../../hooks/useForm'
import { signUp } from '../../services/actions/user'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'

export const Register: React.FC = () => {
  const { userData, updateFields } = useForm()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuth, userRequest } = useTypedSelector(({ user }) => user)

  const state = location.state

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(signUp(userData))
  }

  if (userRequest) {
    return null
  }

  if (isAuth) {
    navigate(state?.from || AppRoutes.Main)
  }

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          value={userData.name}
          onChange={(e) => updateFields({ name: e.target.value })}
          extraClass="mb-6"
          placeholder={'Имя'}
        />
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
          Зарегистрироваться
        </Button>
      </form>
      <div className={style.innerText}>
        <p className="text text_color_inactive text_type_main-default ">Уже зарегистрированы?&nbsp;</p>
        <Link to={AppRoutes.SignIn} className="text text_type_main-default text_color_accent">
          Войти
        </Link>
      </div>
    </section>
  )
}
