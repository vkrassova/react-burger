import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {Ingredients} from '../../../../types/data';
import React, {useState} from 'react';
import styles from '../../BurgerIngredients.module.scss';

type IngredientsListProps = {
    ingredientType: string,
    title: string,
    ingredients: Ingredients[],
    onItemClick: any
}

const BurgerCategory: React.FC<IngredientsListProps> = ({ingredients, onItemClick, ingredientType, title}) => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <h3 className="text text_type_main-medium mb-6">{title}</h3>
            <ul className={styles.list}>
                {
                    ingredients &&
                    ingredients.map((el) => {
                        if (el.type === ingredientType) {
                            return (
                                <li className={styles.item} key={el._id} onClick={() => onItemClick(el)}>
                                    <div className={styles.img__wrapper}>
                                        <img src={el.image} alt={el.name}/>
                                        { (counter > 0) &&
                                            <Counter count={counter} />
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
