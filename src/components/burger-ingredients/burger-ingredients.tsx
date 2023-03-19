import React, { useRef } from 'react'
import { useTypedSelector } from '../../hooks'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { INGREDIENT_TYPES } from '../../constants'
import { getRect, tabsClickHandler } from '../../utils'
import styles from './burger-ingredients.module.scss'
import { BurgerCategory } from './components'

const PADDING_BOTTOM = 50

export const BurgerIngredients: React.FC = () => {
  const { ingredients } = useTypedSelector((store) => store.ingredients)

  const [current, setCurrent] = React.useState<string>(INGREDIENT_TYPES.buns)

  const bunRef = useRef<HTMLDivElement | null>(null)
  const sauceRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const tabsRef = useRef<HTMLDivElement | null>(null)

  const scroll = () => {
    const tabsBottom = Math.abs(Math.round(getRect(tabsRef?.current).bottom - PADDING_BOTTOM))
    const mainTop = Math.abs(Math.round(getRect(mainRef?.current).top - tabsBottom))
    const saucesTop = Math.abs(Math.round(getRect(sauceRef?.current).top - tabsBottom))
    const bunTop = Math.abs(Math.round(getRect(bunRef?.current).top - tabsBottom))

    const array = [
      { block: bunTop, tab: INGREDIENT_TYPES.buns },
      { block: saucesTop, tab: INGREDIENT_TYPES.sauces },
      { block: mainTop, tab: INGREDIENT_TYPES.main },
    ]

    array.sort((prev, next) => prev.block - next.block)

    if (current !== array[0].tab) {
      setCurrent(array[0].tab)
    }
  }

  return (
    <section className={styles.wrapper}>
      <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
      <div className={styles.tabsWrapper} ref={tabsRef}>
        <Tab
          value={INGREDIENT_TYPES.buns}
          active={current === INGREDIENT_TYPES.buns}
          onClick={() => tabsClickHandler(bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value={INGREDIENT_TYPES.sauces}
          active={current === INGREDIENT_TYPES.sauces}
          onClick={() => tabsClickHandler(sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value={INGREDIENT_TYPES.main}
          active={current === INGREDIENT_TYPES.main}
          onClick={() => tabsClickHandler(mainRef)}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.ingredientsWrapper} onScroll={scroll}>
        <BurgerCategory title={'Булки'} ingredientType={'bun'} ingredients={ingredients} ref={bunRef} />
        <BurgerCategory title={'Соусы'} ingredientType={'sauce'} ingredients={ingredients} ref={sauceRef} />
        <BurgerCategory title={'Начинки'} ingredientType={'main'} ingredients={ingredients} ref={mainRef} />
      </div>
    </section>
  )
}
