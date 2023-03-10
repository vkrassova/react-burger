import React from 'react'
import { useTypedSelector } from '../../hooks'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import styles from '../../components/app/app.module.scss'
import { BurgerIngredients, BurgerConstructor, Preloader } from '../../components'

export const Main: React.FC = () => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useTypedSelector((store) => store.ingredients)

  return (
    <div className={styles.wrapper}>
      {ingredientsRequest && (
        <>
          <p className="text text_type_main-large mb-20 mt-8">Загрузка</p>
          <Preloader />
        </>
      )}
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
