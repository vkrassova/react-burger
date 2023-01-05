import React from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import { Link } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import { useForm } from '../../hooks/useForm'

export const Profile: React.FC = () => {
  const { userData, updateFields } = useForm()

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
          <form>
            <Input
              onChange={(e) => updateFields({ name: e.target.value })}
              error={false}
              value={userData.name}
              type="text"
              placeholder="Имя"
              icon="EditIcon"
              name="name"
              size="default"
              extraClass="mb-6"
            />
            <Input
              onChange={(e) => updateFields({ email: e.target.value })}
              error={false}
              value={userData.email}
              type="text"
              placeholder="Логин"
              icon="EditIcon"
              name="email"
              errorText="Ошибка"
              size="default"
              extraClass="mb-6"
            />
            <PasswordInput
              onChange={(e) => updateFields({ password: e.target.value })}
              value={userData.password}
              name="password"
            />

            <div className={style.buttonWrapper}>
              <Button htmlType="button" type="secondary" size="medium">
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
