import React, {useState} from 'react';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import Tabs from '../Tabs/Tabs';
import {BurgerIngredientsProps, Ingredients} from '../../types/data';
import BurgerCategory from './components/BurgerCategory/BurgerCategory';
import {CategoryIngredient} from '../../types/data';

import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

type Props = {
    ingredients: Ingredients[],
    // ingredient: any,
}

const BurgerIngredients: React.FC<Props> = ({ingredients}) => {

    const [selectedItem, setSelectedIngredient] = useState({});

    const {
        modalState,
        toggle
    } = useModal();

    const handleClickItem = (i: object) => {
        toggle();
        setSelectedIngredient(i)
    }


    return (
        <div className={styles.wrapper}>
            <h2 className="text text_type_main-large mb-5">Соберите бургер</h2>
            <Tabs />
            <div className={styles.ingredientsWrapper}>
                <BurgerCategory title={'Булки'} ingredientType={'bun'} ingredients={ingredients} />
                <BurgerCategory title={'Соусы'} ingredientType={'sauce'} ingredients={ingredients} />
                <BurgerCategory title={'Начинки'} ingredientType={'main'} ingredients={ingredients} />
            </div>
            {
                modalState &&
                <Modal onCloseButtonClick={toggle}>
                    {/*<IngredientDetails ingredient={selectedItem}/>*/}
                </Modal>
            }

        </div>

    )
}

export default BurgerIngredients;
