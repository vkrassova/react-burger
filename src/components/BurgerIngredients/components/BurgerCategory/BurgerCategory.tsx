import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {Ingredients} from '../../../../types/data'
import React, {useMemo, useRef, useState} from 'react'
import styles from '../../BurgerIngredients.module.scss'
import { useDrag } from 'react-dnd'
import {useTypedSelector} from '../../../../hooks/useTypedSelector';
import {useAppDispatch} from '../../../../hooks/useAppDispatch';

interface IngredientsListProps {
    ingredientType: string,
    title: string,
    ingredients: Ingredients[],
    onItemClick: Function,
    ref: React.ForwardedRef<HTMLParagraphElement>
}

const BurgerCategory: React.FC<IngredientsListProps> = React.forwardRef(({ingredients, ingredientType, title, onItemClick}, ref: React.ForwardedRef<HTMLParagraphElement>) => {
    const [counter, setCounter] = useState(0)

    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredients
    });

    return (
        <div ref={ref}>
            <h3 className="text text_type_main-medium mb-6">{title}</h3>
            <ul className={styles.list}>
                {
                    ingredients &&
                    ingredients.map((el) => {
                        if (el.type === ingredientType) {
                            return (
                                <li className={styles.item} key={el._id} onClick={() => onItemClick(el)} ref={dragRef}>
                                    <div className={styles.img__wrapper}>
                                        <img src={el.image} alt={el.name}/>
                                        {(counter > 0) &&
                                            <Counter count={0}/>
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
        </div>
    )
})

export default BurgerCategory;
