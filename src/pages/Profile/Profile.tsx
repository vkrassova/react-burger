import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components'
import { ProfileNav } from '../../components/ProfileNav/ProfileNav'
import { patchUser } from '../../services/actions/user'
import { useTypedSelector, useAppDispatch } from '../../hooks'
import style from '../styles.module.scss'

export const Profile: React.FC = () => {
  const { user } = useTypedSelector(({ user }) => user)
  const dispatch = useAppDispatch()

  type initialUserStateProps = {
    name: string
    email: string
    password: string
  }

  const initialUserState = useMemo(
    () => ({
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    }),
    [user]
  )

  const [fields, setFields] = useState<initialUserStateProps>({ ...initialUserState })

  const handleFieldsChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { target } = evt

    setFields({
      ...fields,
      [target.name]: target.value,
    })
  }

  const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    await dispatch(patchUser(fields))
  }

  const handleCancel = () => {
    setFields({
      ...initialUserState,
    })
  }

  const [isChanged, setIsChanged] = useState<boolean>(false)

  useEffect(() => {
    setIsChanged(
      fields.name !== initialUserState.name ||
        fields.email !== initialUserState.email ||
        fields.password !== initialUserState.password
    )
  }, [initialUserState, fields])

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.navWrapper}>
          <ProfileNav />
          <p className={`${style.description} text text_type_main-default`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div>
          <form onSubmit={handleFormSubmit}>
            <Input
              error={false}
              value={fields.name}
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
              value={fields.email}
              type="text"
              placeholder="Логин"
              icon="EditIcon"
              name="email"
              errorText="Ошибка"
              size="default"
              extraClass="mb-6"
            />
            <PasswordInput onChange={handleFieldsChange} value={fields.password} name="password" />

            {isChanged && (
              <div className={style.buttonWrapper}>
                <Button htmlType="button" type="secondary" size="medium" onClick={handleCancel}>
                  Отмена
                </Button>
                <Button htmlType="submit" type="primary" size="medium">
                  Сохранить
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
