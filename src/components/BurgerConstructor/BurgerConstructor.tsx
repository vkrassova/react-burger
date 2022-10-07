import styles from '../BurgerConstructor/BurgerConstructor.module.scss';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIngredientsProps} from '../../types/data';
import data from '../../utils/data';
import React from 'react';

const BurgerConstructor: React.FC<BurgerIngredientsProps> = ({ingredients}) => {
    const bun = data.filter(item => item.type === 'bun')[0]

    return (
        <div className={`${styles.wrapper}`}>
            <div className="pl-8 mr-4">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun.name} (верх)`}
                    price={200}
                    thumbnail={bun.image}
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
                            }
                        }
                    )
                }
            </div>

            <div className="pl-8 mb-10 mr-4">
                <ConstructorElement
                    type="bottom"
                    text={`${bun.name} (низ)`}
                    isLocked={true}
                    price={200}
                    thumbnail={bun.image}
                />
            </div>
            <div className={styles.sum}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium">610</span>
                    <CurrencyIcon type="primary"/>
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить
                </Button>
            </div>

        </div>
    )
}

export default BurgerConstructor;
