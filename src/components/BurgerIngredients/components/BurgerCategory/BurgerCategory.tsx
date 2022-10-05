import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Ingredients} from '../../../../types/data';
import React from 'react';
import styles from '../../BurgerIngredients.module.scss';

type IngredientsListProps = {
    ingredientType: string,
    ingredients: Ingredients[]
}

const BurgerCategory: React.FC<IngredientsListProps> = ({ingredients, ingredientType}) => {
    return (
        <>
            <ul className={styles.list}>
                {
                    ingredients.map(el => {
                        if (el.type === ingredientType) {
                            return (
                                <li className={styles.item} key={el._id}>
                                    <div className={styles.img__wrapper}>
                                        <img src={el.image} alt={el.name}/>
                                        <Counter count={0} size="default"/>
                                    </div>
                                    <div className={styles.priceWrapper}>
                                        <span className="text text_type_digits-default pr-2">{el.price}</span>
                                        <CurrencyIcon type="primary"/>
                                    </div>
                                    <p className={`${styles.ingredientsText} text text_type_main-default`}>{el.name}</p>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </>
    )
}

export default BurgerCategory;
