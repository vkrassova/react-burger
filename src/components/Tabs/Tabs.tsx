import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from '../Tabs/Tabs.module.scss';

const Tabs = () => {
    const buns = 'buns';
    const sauces = 'sauces';
    const main = 'main';

    const [current, setCurrent] = React.useState(buns)
    return (
        <div className={styles.tabsWrapper}>
            <Tab value={buns} active={current === buns} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value={sauces} active={current === sauces} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value={main} active={current === main} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}

export default Tabs;
