import React from 'react'
import {Button, Input, PasswordInput} from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import {useForm} from '../../hooks/useForm'
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../constants';

export const ResetPassword: React.FC = () => {
    const {userData, updateFields} = useForm()

    return (
        <section className={style.wrapper}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <form>
                <PasswordInput
                    value={userData.password}
                    onChange={(e) => updateFields({password: e.target.value})}
                    placeholder={'Введите новый пароль'}
                    extraClass="mb-6"
                />
                <Input
                    value={userData.code}
                    onChange={(e) => updateFields({code: e.target.value})}
                    placeholder={'Введите код из письма'}
                    extraClass="mb-6"
                />
                <Button htmlType={'submit'} extraClass="mb-20">
                    Сохранить
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
