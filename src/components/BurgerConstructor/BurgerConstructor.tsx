import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../BurgerConstructor/BurgerConstructor.module.scss'

const BurgerConstructor = () => {
    return (
        <div className={`${styles.wrapper}`}>
            <ul className={styles.list}>
                <li className={`${styles.item__top} ${styles.item}`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                    />
                </li>

                <li className={styles.item}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                    />
                </li>
                <li className={`${styles.item__bottom} ${styles.item}`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                    />
                </li>
            </ul>
        </div>
    )
}

export default BurgerConstructor;
