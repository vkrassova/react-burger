import styles from '../../BurgerIngredients.module.scss';
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIngredientsProps} from '../../../../types/data';
import React from 'react';

const Sauces: React.FC<BurgerIngredientsProps> = ({ingredients}) => {
    return (
        <>
            <h3 className="text text_type_main-medium mb-6">Соусы</h3>
            <ul className={styles.list}>
                {
                    ingredients.map((el) => {
                            if (el.type === 'sauce') {
                                return (
                                    <li className={styles.item} key={el._id}>
                                        <div className={styles.img__wrapper}>
                                            <img src={el.image} alt={el.name}/>
                                            <Counter count={1} size="default"/>
                                        </div>
                                        <div style={{marginBottom: 'auto'}}>
                                            <span className="text text_type_digits-medium pr-2">{el.price}</span>
                                            <CurrencyIcon type="primary"/>
                                        </div>
                                        <p className="text text_type_main-default" style={{display: 'inline-block', marginTop: '4px'}}>{el.name}</p>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </ul>
        </>
    )
}

export default Sauces;
