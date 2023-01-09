import React, {FormEvent, useEffect, useState} from 'react'
import {Button, EmailInput} from '@ya.praktikum/react-developer-burger-ui-components'
import style from '../styles.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import {AppRoutes} from '../../constants'
import {forgotPassword} from '../../services/actions/user'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const ForgotPassword: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isResetPassword } = useTypedSelector(({ user }) => user)

    const [email, setValue] = useState('')
    const onChange = (e: { target: { value: string } }) => {
        setValue(e.target.value)
    }

    const handleFormSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        await dispatch(forgotPassword(email))
    }

    useEffect(() => {
        if(isResetPassword) {
            setTimeout(() => {
                navigate(AppRoutes.ResetPassword)
            }, 100)
        }
    }, [isResetPassword])

    return (
        <section className={style.wrapper}>
            <h2 className="text text_type_main-medium mb-6">Восстановление пароля</h2>
            <form onSubmit={handleFormSubmit}>
                <EmailInput value={email} onChange={onChange} extraClass="mb-6" placeholder={'Укажите e-mail'}/>
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
