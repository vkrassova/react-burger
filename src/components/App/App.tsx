import React, {useState, useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from '../App/App.module.scss';

function App() {
    const [state, setState] = useState([]);
    const url = 'https://norma.nomoreparties.space/api/ingredients';

    useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setState(data.data))
                .catch((err) => console.log(err))
        }, []
    )

    return (
        <>
            <AppHeader/>
            <div className={styles.wrapper}>
                {
                    state ? (
                        <main className={styles.mainContent}>
                            <BurgerIngredients ingredients={state}/>
                            <BurgerConstructor ingredients={state}/>
                        </main>
                    ) : (
                        <div>
                            <span className="text text_type_digits-large text_color_error">Что-то пошло не так...</span>
                        </div>
                    )

                }
            </div>
        </>
    );
}

export default App;
