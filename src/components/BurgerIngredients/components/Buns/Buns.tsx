import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import fluorescentBun from '../../../../img/bun-2.png';
import kratorBun from '../../../../img/bun-1.png';
import styles from '../../BurgerIngredients.module.scss';

const Buns = () => {
    return (
        <>
            <h3 className="text text_type_main-medium mb-6">Булки</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={kratorBun} alt="Булочка"/>
                        <Counter count={1} size="default"/>
                    </div>
                    <div className={styles.priceWrapper}>
                        <span className="text text_type_digits-default pr-2">20</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Краторная булка N-200i</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={fluorescentBun} alt="Булочка"/>
                    </div>
                    <div className={styles.priceWrapper}>
                        <span className="text text_type_digits-default pr-2">20</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
                </li>
            </ul>
        </>
    )
}

export default Buns;
