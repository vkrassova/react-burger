import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Ingredients} from '../../../../types/data';
import React, {useState} from 'react';
import styles from '../../BurgerIngredients.module.scss';

type IngredientsListProps = {
    ingredientType: string,
    title: string,
    ingredients: Ingredients[]
}

const BurgerCategory: React.FC<IngredientsListProps> = ({ingredients, ingredientType, title}) => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <h3 className="text text_type_main-medium mb-6">{title}</h3>
            <ul className={styles.list}>
                {
                    ingredients &&
                    ingredients.map(el => {
                        if (el.type === ingredientType) {
                            return (
                                <li className={styles.item} key={el._id}>
                                    <div className={styles.img__wrapper}>
                                        <img src={el.image} alt={el.name}/>
                                        {
                                            counter &&
                                            <Counter count={counter} size="default"/>
                                        }
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
