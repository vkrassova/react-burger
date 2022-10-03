import styles from '../BurgerConstructor/BurgerConstructor.module.scss';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {IngredientsProps} from '../../types/data';
import data from '../../utils/data';
import React from 'react';

type BurgerIngredientsProps = {
    ingredients: IngredientsProps[]
}

const BurgerConstructor: React.FC<BurgerIngredientsProps> = ({ingredients}) => {
    const bun = data.filter(item => item.type === 'bun')[0]

    return (
        <div className={`${styles.wrapper}`}>

            <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={200}
                thumbnail={bun.image}
            />

            <div className={styles.dynamicConstructor}>
                {
                    ingredients.map((el) => {
                            if (el.type !== 'bun') {
                                return (
                                    <div>
                                        <DragIcon type="primary" />
                                        <ConstructorElement key={el._id}
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

            <ConstructorElement
                text={`${bun.name} (низ)`}
                isLocked={true}
                price={200}
                thumbnail={bun.image}
            />
            <div>
                <p>
                    610
                    <CurrencyIcon type="primary"/>
                </p>
                <Button htmlType="button" type="primary" size="large">
                    Оформить
                </Button>
            </div>

        </div>
    )
}

export default BurgerConstructor;
