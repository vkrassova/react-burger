import React from 'react';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import Tabs from '../Tabs/Tabs';
import Buns from './components/Buns/Buns';
import Sauces from './components/Sauces/Sauces';

const BurgerIngredients = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <Tabs />
            <Buns />
            <Sauces />
        </div>

    )
}

export default BurgerIngredients;
