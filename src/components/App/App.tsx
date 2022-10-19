import React, {useState, useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import styles from '../App/App.module.scss';
import {IngredientsContext} from '../../services/IngredientsContext';
import {API_INGREDIENTS} from '../../const';
import {checkResponse} from '../../utils/utils';
import {applyMiddleware, createStore} from "redux";

const App: React.FC = () => {
    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    })

    useEffect(() => {
            setState({...state, isLoading: true})
            fetch(API_INGREDIENTS)
                .then(res => checkResponse(res))
                .then(data => {
                    setState({
                        isLoading: false,
                        hasError: false,
                        ingredients: data.data,
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
                            <IngredientsContext.Provider value={ingredients}>
                                <BurgerIngredients/>
                                <BurgerConstructor/>
                            </IngredientsContext.Provider>
                        </main>
                    )
                }
            </div>
        </>
    );
}

export default App;
