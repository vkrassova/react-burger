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
                <BurgerCategory title={'Булки'} ingredientType={'bun'} ingredients={ingredients} />
                <BurgerCategory title={'Соусы'} ingredientType={'sauce'} ingredients={ingredients} />
                <BurgerCategory title={'Начинки'} ingredientType={'main'} ingredients={ingredients} />
            </div>
        </div>

    )
}

export default BurgerIngredients;
