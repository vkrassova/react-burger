import React from 'react'
import style from './FeedOrderItem.module.scss'
import {Ingredients} from '../../../types/data'
import {OrderImage} from '../../OrderImage/OrderImage'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

type FeedOrderItemProps = {
    element: Ingredients,
}

export const FeedOrderItem: React.FC<FeedOrderItemProps> = ({element}) => {
    return (
        <li className={`${style.item} mr-6`}>
            <div className={style.imgWrapper}>
                <OrderImage src={element.image}/>
            </div>
            <div className={`text text_type_main-default`}>
                {element.name}
            </div>
            <div className={style.price}>
                <CurrencyIcon type="primary" />
            </div>
        </li>
    )
}
