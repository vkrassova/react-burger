import React, {useState} from 'react'
import {Button, EmailInput, PasswordInput, Input} from '@ya.praktikum/react-developer-burger-ui-components'
import style from './Register.module.scss'
import {Link} from 'react-router-dom';
import {AppRoutes} from '../../constants';

export const Register: React.FC = () => {
    const [form, setValue] = useState({email: '', password: '', name: ''})

    const onChange = (e: { target: { name: string; value: string; }; }) => {
        setValue({...form, [e.target.name]: e.target.value})
    };

    return (
        <section className={style.register}>
            <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
            <form>
                <Input value={form.name} onChange={onChange} extraClass="mb-6" placeholder={"Имя"}/>
                <EmailInput value={form.email} onChange={onChange} extraClass="mb-6"/>
                <PasswordInput value={form.password} onChange={onChange} extraClass="mb-6"/>
                <Button htmlType={'button'} extraClass="mb-20">Зарегистрироваться</Button>
            </form>
            <div className={style.innerText}>
                <p className="text text_color_inactive text_type_main-default ">
                    Уже зарегистрированы?&nbsp;</p>
                <Link to={AppRoutes.SignIn} className="text text_type_main-default text_color_accent">
                    Войти
                </Link>
            </div>
        </section>
    )
}
