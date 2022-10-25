import styles from '../../BurgerIngredients.module.scss'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import {Ingredients} from '../../../../types/data'

type IngredientsItemProps = {
    ingredient: any
}

const IngredientsItem: React.FC<IngredientsItemProps> = ({ingredient}) => {
    return (
        <>
            <div className={styles.img__wrapper}>
                <img src={ingredient.image} alt={ingredient.name}/>
            </div>
            <div className={styles.priceWrapper}>
                <span className="text text_type_digits-default pr-2">{ingredient.price}</span>
                <CurrencyIcon type="primary"/>
            </div>
            <p className={`${styles.ingredientsText} text text_type_main-default`}>{ingredient.name}</p>
        </>
    )
}

export default IngredientsItem
