import React from 'react'
import style from './FeedOrderItem.module.scss'
import {Ingredients} from '../../../types/data'
import {OrderImage} from '../../OrderImage/OrderImage'

type FeedOrderItemProps = {
    element: Ingredients,
}

export const FeedOrderItem: React.FC<FeedOrderItemProps> = ({element}) => {
    return (
        <li className={`${style.item} mr-6`}>
            <div className={style.imgWrapper}>
                <OrderImage src={element.image}/>
            </div>
        </li>
    )
}
