import React from 'react';
import style from './IngredientDetails.module.scss';

const IngredientDetails = ({ingredient}: any) => {
    return (
        <div className={style.content}>
            <div className={style.imgWrapper}>
                <img src={ingredient.image} alt=""/>
            </div>
            <h3 className="text text_type_main-medium mb-8">{ingredient.name}</h3>
            <ul className={style.list}>
                <li className={style.item}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
                </li>
                <li className={style.item}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
                </li>
                <li className={style.item}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
                </li>
                <li className={style.item}>
                    <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

export default IngredientDetails;