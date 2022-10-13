import style from './OrderDetails.module.scss';
import IconDone from './../../images/done.png';
import React from 'react';

type orderProps = {
    order: string
}

const OrderDetails: React.FC<orderProps> = ({order}) => {
    return (
        <>
            <span className={`${style.orderCount} text text_type_digits-large mb-8`}>{order}</span>
            <p className="text text_type_main-default mb-15">идентификатор заказа</p>
            <div className={style.icon}>
                <img src={IconDone} alt="done"/>
            </div>
            <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</p>
        </>
    )
}

export default OrderDetails;
