import React from 'react'
import style from './FeedOrderDetail.module.scss'
import {useTypedSelector} from '../../hooks'
import {useParams} from 'react-router-dom'
import {StatusCodes} from '../../types/data'
import {FeedOrderItem} from './components/FeedOrderItem';

export const FeedOrderDetail: React.FC = () => {
    const {messages} = useTypedSelector((store) => store.ws)
    const {ingredients} = useTypedSelector((store) => store.ingredients)
    const {id} = useParams() as { id: string }

    const currentOrder = messages?.orders.find((el) => el._id === id)

    const orderArr = ingredients.filter((el) => {
        return currentOrder?.ingredients.includes(el._id)
    })

    return currentOrder ? (
        <div className={style.container}>
            <div className={style.top}>
                <div className={`text text_type_digits-default mb-10`}>
                    {`#${currentOrder.number}`}
                </div>
                <div className={`text text_type_main-medium mb-3`}>
                    {currentOrder.name}
                </div>
                {
                    currentOrder.status === StatusCodes.done && (
                        <div className={`text text_type_main-default text_color_success`}>
                            Выполнен
                        </div>
                    )
                }
            </div>
            <div className={`${style.body} mb-10`}>
                <span className={`text text_type_main-medium mb-6`}>Состав:</span>
            </div>
            <div className={style.mainWrapper}>
                <div className={style.wrapper}>
                    <ul className={style.list}>
                        {
                            orderArr.map((el) => {
                                return(
                                    <FeedOrderItem element={el}/>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    ) : null
}
