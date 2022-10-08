import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from '../Tabs/Tabs.module.scss';

const INGREDIENT_TYPES = {
    buns: 'buns',
    sauces: 'sauces',
    main: 'main'
}

const Tabs = () => {
    const [current, setCurrent] = React.useState(INGREDIENT_TYPES.buns)

    return (
        <div className={styles.tabsWrapper}>
            <Tab value={INGREDIENT_TYPES.buns} active={current === INGREDIENT_TYPES.buns} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value={INGREDIENT_TYPES.sauces} active={current === INGREDIENT_TYPES.sauces} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value={INGREDIENT_TYPES.main} active={current === INGREDIENT_TYPES.main} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

export default Tabs;
