import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

function App() {
  return (
    <div className="pl-5 pr-5">
        <AppHeader />
        <main>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <div style={{display: 'flex'}}>
                <BurgerIngredients />
                <BurgerConstructor />
            </div>
        </main>
    </div>
  );
}

export default App;
