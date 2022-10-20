import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import styles from '../App/App.module.scss'
import {IngredientsContext} from '../../services/IngredientsContext'
import {API_INGREDIENTS} from '../../const'
import {checkResponse} from '../../utils/utils'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {getIngredients} from '../../services/actions/ingredients'
import {AppDispatch} from '../../index';

const App: React.FC = () => {
    const useAppDispatch: () => AppDispatch = useDispatch

    const dispatch = useAppDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(getIngredients())
    }, [dispatch])

    // const {isLoading, hasError, ingredients} = state;

    return (
        <>
            <AppHeader/>
            <div className={styles.wrapper}>
                {/*{isLoading && (*/}
                {/*    <p className="text text_type_main-large">Загрузка...</p>*/}
                {/*)}*/}
                {/*{hasError && (*/}
                {/*    <p className="text text_type_main-large text_color_error">Ошибка</p>*/}
                {/*)}*/}

                <main className={styles.mainContent}>
                        <BurgerIngredients />
                        <BurgerConstructor/>
                </main>
            </div>
        </>
    )
}

export default App
