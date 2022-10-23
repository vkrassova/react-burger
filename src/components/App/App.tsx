import React, {useEffect} from 'react'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import styles from '../App/App.module.scss'
import {getIngredients} from '../../services/actions/ingredients'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const {ingredients, ingredientsRequest, ingredientsFailed} = useTypedSelector(store => store.ingredients)

    useEffect(() => {
        // @ts-ignore
        dispatch(getIngredients())
    }, [dispatch])

    return (
        <>
            <AppHeader/>
            <div className={styles.wrapper}>
                {ingredientsRequest && (
                    <p className="text text_type_main-large">Загрузка...</p>
                )}
                {ingredientsFailed && (
                    <p className="text text_type_main-large text_color_error">Ошибка</p>
                )}
                {
                    !ingredientsFailed && ingredients.length > 0 && (
                        <main className={styles.mainContent}>
                            <DndProvider backend={HTML5Backend}>
                                <BurgerIngredients/>
                                <BurgerConstructor/>
                            </DndProvider>
                        </main>
                    )
                }
            </div>
        </>
    )
}

export default App
