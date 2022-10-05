import React from 'react';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import Tabs from '../Tabs/Tabs';
import {BurgerIngredientsProps} from '../../types/data';
import BurgerCategory from './components/BurgerCategory/BurgerCategory';

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ingredients}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <Tabs />
            <div className={styles.ingredientsWrapper}>
                <h3 className="text text_type_main-medium mb-6">Булки</h3>
                <BurgerCategory ingredientType={'bun'} ingredients={ingredients} />
                <h3 className="text text_type_main-medium mb-6">Соусы</h3>
                <BurgerCategory ingredientType={'sauce'} ingredients={ingredients} />
                <h3 className="text text_type_main-medium mb-6">Начинки</h3>
                <BurgerCategory ingredientType={'main'} ingredients={ingredients} />
            </div>
        </div>

    )
}

export default BurgerIngredients;
