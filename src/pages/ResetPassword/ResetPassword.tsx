import React from 'react'
import { Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { useForm } from '../../hooks/useForm'

export const ResetPassword: React.FC = () => {
  const { userData, updateFields } = useForm()

  return (
    <section className={style.wrapper}>
      <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
      <form>
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
        />
      </form>
    </section>
  )
}
