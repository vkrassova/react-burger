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
                <li>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.calories}</span>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</span>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.fat}</span>
                </li>
                <li>
                    <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
                    <span className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</span>
                </li>
            </ul>
        </div>
    )
}

export default IngredientDetails;