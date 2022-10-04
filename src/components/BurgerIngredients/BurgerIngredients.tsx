import React from 'react';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import Tabs from '../Tabs/Tabs';
import Buns from './components/Buns/Buns';
import Sauces from './components/Sauces/Sauces';
import {BurgerIngredientsProps} from '../../types/data';

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ingredients}) => {
    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <Tabs />
            <div className={styles.ingredientsWrapper}>
                <Buns />
                <Sauces ingredients={ingredients}/>
            </div>
        </div>

    )
}

export default BurgerIngredients;
