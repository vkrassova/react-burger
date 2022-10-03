import React from 'react';
import data from '../../utils/data';
import {IngredientsProps} from '../../types/data';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from '../App/App.module.scss'

function App() {
    return (
        <div className={styles.wrapper}>
            <AppHeader/>
            <main style={{display: 'flex', alignItems: 'flex-start'}}>
                <BurgerIngredients/>
                <BurgerConstructor ingredients={data}/>
            </main>
        </div>
    );
}

export default App;
