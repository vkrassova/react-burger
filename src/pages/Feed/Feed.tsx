import React from 'react'
import feed from './Feed.module.scss'
import {Order} from '../../components/Order/Order'

export const Feed: React.FC = () => {
    return (
        <section className={feed.mainWrapper}>
            <div className={feed.wrapper}>
                <h2 className="text text_type_main-large mb-5">Лента Заказов</h2>
                <div>
                    <ul className={feed.ordersList}>
                        <Order/>
                    </ul>
                </div>
            </div>
            <div className={feed.statusWrapper}>
                <div className={feed.statusInfo}>
                    <div className={feed.statusColumn}>
                        <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
                        <ul className={feed.statusList}>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                        </ul>
                    </div>
                    <div className={feed.statusColumn}>
                        <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                        <ul className={feed.statusList}>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                            <li className={'text text_type_digits-default mb-2'}>
                                034533
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`mt-15`}>
                    <h3 className='text text_type_main-medium'>Выполнено за все время:</h3>
                    <p className={`${feed.text} text text_type_digits-large`}>453244</p>
                </div>
                <div className={`mt-15`}>
                    <h3 className='text text_type_main-medium'>Выполнено за сегодня:</h3>
                    <p className={`${feed.text} text text_type_digits-large`}>234234</p>
                </div>
            </div>
        </section>
    )
}
