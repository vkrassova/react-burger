import styles from '../../BurgerIngredients.module.scss';
import kratorBun from '../../../../img/bun-1.png';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import fluorescentBun from '../../../../img/bun-2.png';

const Sauces = () => {
    return (
        <>
            <h3 className="text text_type_main-medium mb-6">Соусы</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={kratorBun} alt="Булочка"/>
                        <Counter count={1} size="default"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">20</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Краторная булка N-200i</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={fluorescentBun} alt="Булочка"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">20</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Флюоресцентная булка R2-D3</p>
                </li>
            </ul>
        </>
    )
}

export default Sauces;
