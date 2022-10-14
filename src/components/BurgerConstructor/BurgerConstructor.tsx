import styles from '../BurgerConstructor/BurgerConstructor.module.scss';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React, {useContext, useState} from 'react';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import {IngredientsContext} from '../../services/IngredientsContext';
import {Ingredients} from '../../types/data';
import {API_ORDER} from '../../const';
import {checkResponse} from '../../utils/utils';

const BurgerConstructor: React.FC = () => {
    const ingredients = useContext(IngredientsContext);
    const bun = ingredients.filter(item => item.type === 'bun')[0];

    const initialTotalPrice = {price: 0};

    const [orderNumber, setOrderNumber] = useState('');

    const totalPrice = ingredients.reduce((accumulator: number, currentValue: Ingredients) => {
        if (currentValue.type === 'bun') return accumulator + currentValue.price * 2;
        else return accumulator + currentValue.price;
    }, initialTotalPrice.price);

    const {
        modalState,
        toggle
    } = useModal();

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: ingredients.map(item => item._id),
        })
    }

    const getOrder = () => {
        fetch(API_ORDER, options)
            .then(res => checkResponse(res))
            .then(res => {
                setOrderNumber(res.order.number)
                toggle()
            })
    };

    return (
        <div className={`${styles.wrapper}`}>
            <div className="pl-8 mr-4">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun?.name} (верх)`}
                    price={bun?.price}
                    thumbnail={bun?.image}
                />
            </div>
            <div className={styles.dynamicConstructor}>
                {
                    ingredients &&
                    ingredients.map((el) => {
                            if (el.type !== 'bun') {
                                return (
                                    <div className={styles.item} key={el._id}>
                                        <DragIcon type="primary"/>
                                        <ConstructorElement
                                            text={el.name}
                                            price={el.price}
                                            thumbnail={el.image}
                                        />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        }
                    )
                }
            </div>

            <div className="pl-8 mb-10 mr-4">
                <ConstructorElement
                    type="bottom"
                    text={`${bun?.name} (низ)`}
                    isLocked={true}
                    price={bun?.price}
                    thumbnail={bun?.image}
                />
            </div>
            <div className={styles.sum}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium">{totalPrice}</span>
                    <CurrencyIcon type="primary"/>
                </div>

                <Button htmlType="button" type="primary" size="large" onClick={getOrder}>
                    Оформить
                </Button>
                {
                    modalState &&
                    <Modal onCloseButtonClick={toggle}>
                        <OrderDetails order={orderNumber}/>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default BurgerConstructor;
