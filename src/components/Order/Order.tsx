import React from 'react'
import order from './Order.module.scss'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {Link} from 'react-router-dom';

export const Order: React.FC = () => {
    return (
        <Link to={"/"} className={order.link}>
            <li className={order.wrapper}>
                <div className={order.info}>
                    <span className="text text_type_main-small text_color_primary">#034535</span>
                    <span className="text text_type_main-small text_color_inactive">Сегодня, 16:20</span>
                </div>
                <h3 className="text text_type_main-medium text_color_primary mb-6">Death Star Starship Main бургер</h3>
                {/*<p className="text text_type_main-small mb-6"></p>*/}
                <div className={order.ingredients}>
                    <ul className={order.list}>
                        <li>
                            <p className={`text text_type_digits-default text_color_primary`}></p>
                            <div className={order.imgWrapper}>
                                <div className=""></div>
                                <img className="" alt="Картинка ингредиента"/>
                            </div>
                        </li>
                        <li>
                            <p className={`text text_type_digits-default text_color_primary`}></p>
                            <div className={order.imgWrapper}>
                                <div className=""></div>
                                <img className="" alt="Картинка ингредиента"/>
                            </div>
                        </li>
                    </ul>
                    <div className={order.price}>
                        <p className="text text_type_digits-default text_color_primary mr-2">400</p>
                        <CurrencyIcon type="primary"/>
                    </div>
                </div>
            </li>
        </Link>
    )
}
