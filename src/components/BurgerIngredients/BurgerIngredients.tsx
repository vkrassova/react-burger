import React, { useRef } from 'react'
import BurgerCategory from './components/BurgerCategory/BurgerCategory'
import useModal from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import styles from '../BurgerIngredients/BurgerIngredients.module.scss'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { INGREDIENT_TYPES } from '../../const'
import { getRect, tabsClickHandler } from '../../utils/utils'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { MODAL_OPEN } from '../../services/actions/modal'
import { Ingredients } from '../../types/data'

const PADDING_BOTTOM = 50

const BurgerIngredients: React.FC = () => {
  const { ingredients } = useTypedSelector((store) => store.ingredients)

  const [current, setCurrent] = React.useState(INGREDIENT_TYPES.buns)

  const data = useTypedSelector((store) => store.modal.item)

  const dispatch = useAppDispatch()

  const { modalState, toggle } = useModal()

  const handleClickItem = (ingredient: Ingredients) => {
    toggle()
    dispatch({
      type: MODAL_OPEN,
      item: ingredient,
    })
  }

  const bunRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)
  const tabsRef = useRef(null)

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
        <BurgerCategory
          title={'Булки'}
          ingredientType={'bun'}
          ingredients={ingredients}
          ref={bunRef}
          showDetails={handleClickItem}
        />
        <BurgerCategory
          title={'Соусы'}
          ingredientType={'sauce'}
          ingredients={ingredients}
          ref={sauceRef}
          showDetails={handleClickItem}
        />
        <BurgerCategory
          title={'Начинки'}
          ingredientType={'main'}
          ingredients={ingredients}
          ref={mainRef}
          showDetails={handleClickItem}
        />
      </div>
      {modalState && (
        <Modal onCloseButtonClick={toggle} title="Детали ингридиента">
          <IngredientDetails data={data} />
        </Modal>
      )}
    </section>
  )
}

export default BurgerIngredients
