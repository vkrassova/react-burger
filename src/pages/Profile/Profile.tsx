import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { patchUser } from '../../services/actions/user'
import { useAppDispatch } from '../../hooks/useAppDispatch'

export const Profile: React.FC = () => {
  const { user } = useTypedSelector(({ user }) => user)
  const dispatch = useAppDispatch()

  const initialUserState = {
    name: user?.name || '',
    email: user?.email || '',
    password: '',
  }

  const [state, setState] = useState({ ...initialUserState })

  const handleFieldsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt

    setState({
      ...state,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(patchUser(state))
  }

  const handleCancel = () => {
    setState({
      ...initialUserState,
    })
  }

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.navWrapper}>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to={AppRoutes.Profile}>
                <p className="text text_type_main-medium">Профиль</p>
              </Link>
            </li>
            <li className={style.item}>
              <Link to={AppRoutes.ProfileOrders}>
                <p className="text text_type_main-medium text_color_inactive">История заказов</p>
              </Link>
            </li>
            <li className={style.item}>
              <p className="text text_type_main-medium text_color_inactive">Выход</p>
            </li>
          </ul>
          <p className={`${style.description} text text_type_main-default`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <Input
              error={false}
              value={state.name}
              type="text"
              placeholder="Имя"
              onChange={handleFieldsChange}
              icon="EditIcon"
              name="name"
              size="default"
              extraClass="mb-6"
            />
            <Input
              onChange={handleFieldsChange}
              error={false}
              value={state.email}
              type="text"
              placeholder="Логин"
              icon="EditIcon"
              name="email"
              errorText="Ошибка"
              size="default"
              extraClass="mb-6"
            />
            <PasswordInput onChange={handleFieldsChange} value={state.password} name="password" />

            <div className={style.buttonWrapper}>
              <Button htmlType="button" type="secondary" size="medium" onClick={handleCancel}>
                Отмена
              </Button>
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
