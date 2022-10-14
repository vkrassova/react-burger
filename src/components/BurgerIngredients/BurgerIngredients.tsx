import React, {useState, useRef, useMemo} from 'react';
import Tabs from '../Tabs/Tabs';
import BurgerCategory from './components/BurgerCategory/BurgerCategory';
import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {IngredientsContext} from '../../services/IngredientsContext';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import {tab} from '@testing-library/user-event/dist/tab';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import {INGREDIENT_TYPES} from '../../const';

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

    const tabsClickHandler = (ref: any, setCurrent: Function) => {
        return (value: string) => {
            setCurrent(value);
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    }

    const scrollToBun = useMemo(
        () => tabsClickHandler(bunRef, setCurrent),
        [bunRef, setCurrent]
    )

    const scrollToSauces = useMemo(
        () => tabsClickHandler(sauceRef, setCurrent),
        [sauceRef, setCurrent]
    )

    const scrollToMain = useMemo(
        () => tabsClickHandler(mainRef, setCurrent),
        [mainRef, setCurrent]
    )

    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <div className={styles.tabsWrapper}>
                <Tab value={INGREDIENT_TYPES.buns} active={current === INGREDIENT_TYPES.buns} onClick={scrollToBun}>
                    Булки
                </Tab>
                <Tab value={INGREDIENT_TYPES.sauces} active={current === INGREDIENT_TYPES.sauces}
                     onClick={scrollToSauces}>
                    Соусы
                </Tab>
                <Tab value={INGREDIENT_TYPES.main} active={current === INGREDIENT_TYPES.main}
                     onClick={scrollToMain}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.ingredientsWrapper}>
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
