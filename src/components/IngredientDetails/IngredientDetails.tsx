import React from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks'
import style from './IngredientDetails.module.scss'

export const IngredientDetails: React.FC = () => {
  const { ingredients } = useTypedSelector((store) => store.ingredients)

  const { id } = useParams() as { id: string }

  const data = ingredients.find((el) => el._id === id)

  return (
    <div className={style.content}>
      <div className={style.imgWrapper}>
        <img src={data?.image} alt={data?.name} />
      </div>
      <h3 className="text text_type_main-medium mb-8">{data?.name}</h3>
      <ul className={style.list}>
        <li className={style.item}>
          <p className="text text_type_main-default text_color_inactive pb-2">Калории,ккал</p>
          <span className="text text_type_digits-default text_color_inactive">{data?.calories}</span>
        </li>
        <li className={style.item}>
          <p className="text text_type_main-default text_color_inactive pb-2">Белки, г</p>
          <span className="text text_type_digits-default text_color_inactive">{data?.proteins}</span>
        </li>
        <li className={style.item}>
          <p className="text text_type_main-default text_color_inactive pb-2">Жиры, г</p>
          <span className="text text_type_digits-default text_color_inactive">{data?.fat}</span>
        </li>
        <li className={style.item}>
          <p className="text text_type_main-default text_color_inactive pb-2">Углеводы, г</p>
          <span className="text text_type_digits-default text_color_inactive">{data?.carbohydrates}</span>
        </li>
      </ul>
    </div>
  )
}
