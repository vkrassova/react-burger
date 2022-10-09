import React, {useState, useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from '../App/App.module.scss';

function App() {
    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    })
    const url = 'https://norma.nomoreparties.space/api/ingredients';

    useEffect(() => {
            setState({...state, isLoading: true})
            fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    return Promise.reject(res.status)
                })
                .then(data => {
                    setState({
                        isLoading: false,
                        hasError: false,
                        ingredients: data.data
                    });
                })
                .catch((err) => {
                    setState({
                        ...state,
                        hasError: true,
                    });
                })
        }, []
    )

    const {isLoading, hasError, ingredients} = state;

    return (
        <>
            <AppHeader/>
            <div className={styles.wrapper}>
                {isLoading && (
                    <p className="text text_type_main-large">Загрузка...</p>
                )}
                {hasError && (
                    <p className="text text_type_main-large text_color_error">Ошибка</p>
                )}
                {
                    !isLoading && !hasError && (
                        <main className={styles.mainContent}>
                            <BurgerIngredients ingredients={ingredients}/>
                            <BurgerConstructor ingredients={ingredients}/>
                        </main>
                    )
                }
            </div>
        </>
    );
}

export default App;
