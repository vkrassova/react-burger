import React, {useState} from 'react';
import styles from '../BurgerIngredients/BurgerIngredients.module.scss';
import Tabs from '../Tabs/Tabs';
import {BurgerIngredientsProps} from '../../types/data';
import BurgerCategory from './components/BurgerCategory/BurgerCategory';

import useModal from '../../hooks/useModal';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

const BurgerIngredients: React.FC<BurgerIngredientsProps> = ({ingredients}) => {

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
                <BurgerCategory title={'Булки'} ingredientType={'bun'} ingredients={ingredients} onItemClick={handleClickItem}/>
                <BurgerCategory title={'Соусы'} ingredientType={'sauce'} ingredients={ingredients} onItemClick={handleClickItem}/>
                <BurgerCategory title={'Начинки'} ingredientType={'main'} ingredients={ingredients} onItemClick={handleClickItem}/>
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
