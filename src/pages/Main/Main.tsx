import React from 'react'
import { useTypedSelector } from '../../hooks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { BurgerConstructor } from '../../components/BurgerConstructor/BurgerConstructor'
import { BurgerIngredients } from '../../components/BurgerIngredients/BurgerIngredients'
import styles from '../../components/App/App.module.scss'

export const Main: React.FC = () => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useTypedSelector((store) => store.ingredients)

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
