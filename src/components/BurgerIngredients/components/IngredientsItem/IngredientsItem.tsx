import styles from '../../BurgerIngredients.module.scss'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {useDrag} from 'react-dnd'
import {Ingredients} from '../../../../types/data'

type IngredientsItemProps = {
    ingredient: Ingredients,
    showDetails: Function | any
}

const IngredientsItem: React.FC<IngredientsItemProps> = ({ingredient, showDetails}) => {
    const [{opacity}, dragRef] = useDrag({
        type: 'ingredients',
        item: {...ingredient},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    })

    return (
        <li className={styles.item} ref={dragRef} style={{opacity}} onClick={() => showDetails(ingredient)}>
            <div className={styles.img__wrapper}>
                <img src={ingredient.image} alt={ingredient.name}/>
            </div>
            <div className={styles.priceWrapper}>
                <span className="text text_type_digits-default pr-2">{ingredient.price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${styles.ingredientsText} text text_type_main-default`}>{ingredient.name}</p>
        </li>
    )
}

export default IngredientsItem
