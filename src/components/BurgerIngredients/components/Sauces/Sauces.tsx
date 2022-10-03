import styles from '../../BurgerIngredients.module.scss';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import SpicySauce from '../../../../img/sauce-1.png'
import SpaceSauce from '../../../../img/sauce-2.png'
import TraditionalSauce from '../../../../img/sauce-3.png'
import SpikesSauce from '../../../../img/sauce-4.png'

const Sauces = () => {
    return (
        <>
            <h3 className="text text_type_main-medium mb-6">Соусы</h3>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={SpicySauce} alt="Соус Spicy-X"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">30</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Соус Spicy-X</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={SpaceSauce} alt="Соус фирменный Space Sauce"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">30</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Соус фирменный Space Sauce</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={TraditionalSauce} alt="Соус традиционный галактический"/>
                        <Counter count={1} size="default"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">30</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Соус традиционный галактический</p>
                </li>
                <li className={styles.item}>
                    <div className={styles.img__wrapper}>
                        <img src={SpikesSauce} alt="Соус с шипами Антарианского плоскоходца"/>
                    </div>
                    <div>
                        <span className="text text_type_digits-medium pr-2 mb-1">30</span>
                        <CurrencyIcon type="primary"/>
                    </div>
                    <p className="text text_type_main-default">Соус с шипами Антарианского плоскоходца</p>
                </li>
            </ul>
        </>
    )
}

export default Sauces;
