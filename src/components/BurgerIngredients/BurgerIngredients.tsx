import React, {useState, useRef, useMemo} from 'react';
import BurgerCategory from './components/BurgerCategory/BurgerCategory';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {IngredientsContext} from '../../services/IngredientsContext';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {INGREDIENT_TYPES} from '../../const';
import {getRect, tabsClickHandler} from '../../utils/utils';

const PADDING_BOTTOM = 50;

const BurgerIngredients: React.FC = () => {
    const ingredients = React.useContext(IngredientsContext)
    const [selectedItem, setSelectedIngredient] = useState<HTMLElement | null>(null)
    const [current, setCurrent] = React.useState(INGREDIENT_TYPES.buns)

    const {
        modalState,
        toggle
    } = useModal()

    const handleClickItem = (i: null) => {
        toggle();
        setSelectedIngredient(i)
    }

    const bunRef = useRef(null)
    const sauceRef = useRef(null)
    const mainRef = useRef(null)
    const tabsRef = useRef(null)

    const scroll = () => {
        let tabsBottom = Math.abs(getRect(tabsRef?.current).bottom - PADDING_BOTTOM)
        let mainTop = Math.abs(getRect(mainRef?.current).top - tabsBottom)
        let saucesTop = Math.abs(getRect(sauceRef?.current).top - tabsBottom)
        let bunTop = Math.abs(getRect(bunRef?.current).top - tabsBottom)

        let array = [
            {block: bunTop, tab: INGREDIENT_TYPES.buns},
            {block: saucesTop, tab: INGREDIENT_TYPES.sauces},
            {block: mainTop, tab: INGREDIENT_TYPES.main}
        ]

        array.sort((prev, next) => prev.block - next.block)

        if (current !== array[0].tab) {
            setCurrent(array[0].tab)
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <div className={styles.tabsWrapper} ref={tabsRef}>
                <Tab value={INGREDIENT_TYPES.buns} active={current === INGREDIENT_TYPES.buns} onClick={() => tabsClickHandler(bunRef)}>
                    Булки
                </Tab>
                <Tab value={INGREDIENT_TYPES.sauces} active={current === INGREDIENT_TYPES.sauces}
                     onClick={() => tabsClickHandler(sauceRef)}>
                    Соусы
                </Tab>
                <Tab value={INGREDIENT_TYPES.main} active={current === INGREDIENT_TYPES.main}
                     onClick={() => tabsClickHandler(mainRef)}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientsWrapper} onScroll={scroll}>
                <BurgerCategory title={'Булки'} ingredientType={'bun'} ingredients={ingredients}
                                onItemClick={handleClickItem} ref={bunRef}/>
                <BurgerCategory title={'Соусы'} ingredientType={'sauce'} ingredients={ingredients}
                                onItemClick={handleClickItem} ref={sauceRef}/>
                <BurgerCategory title={'Начинки'} ingredientType={'main'} ingredients={ingredients}
                                onItemClick={handleClickItem} ref={mainRef}/>
            </div>
            {
                modalState &&
                <Modal onCloseButtonClick={toggle} title="Детали ингридиента">
                    <IngredientDetails ingredient={selectedItem}/>
                </Modal>
            }
        </div>
    )
}

export default BurgerIngredients;
