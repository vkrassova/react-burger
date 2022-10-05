import React from 'react';
import data from '../../utils/data';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from '../App/App.module.scss'

function App() {
    return (
        <>
            <AppHeader/>
            <div className={styles.wrapper}>
                <main className={styles.mainContent}>
                    <BurgerIngredients ingredients={data}/>
                    <BurgerConstructor ingredients={data}/>
                </main>
            </div>
        </>
    )
}

export default App;
