import React, { useEffect } from 'react'
import { getIngredients } from '../../services/actions/ingredients'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from '../../components/App/App.module.scss'
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor'

export const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { ingredients, ingredientsRequest, ingredientsFailed } = useTypedSelector((store) => store.ingredients)

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      {ingredientsRequest && <p className="text text_type_main-large">Загрузка...</p>}
      {ingredientsFailed && <p className="text text_type_main-large text_color_error">Ошибка</p>}
      {!ingredientsFailed && ingredients.length > 0 && (
        <main className={styles.mainContent}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </div>
  )
}
