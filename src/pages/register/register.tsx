import React, { FormEvent } from 'react'
import { Button, EmailInput, PasswordInput, Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useForm, useAppDispatch } from '../../hooks'
import { signUp } from '../../services/actions/user'
import style from '../styles.module.scss'

export const Register: React.FC = () => {
  const { userData, updateFields } = useForm()
  const dispatch = useAppDispatch()

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(signUp(userData))
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
