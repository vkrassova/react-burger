import React from 'react'
import { Ingredients } from '../../../../types/data'
import { Link, useLocation } from 'react-router-dom'
import styles from '../../burger-ingredients.module.scss'
import { IngredientsItem } from '../ingredients-item'

interface IngredientsListProps {
  ingredientType: string
  title: string
  ingredients: Ingredients[]
  ref: React.ForwardedRef<HTMLParagraphElement>
}

export const BurgerCategory: React.FC<IngredientsListProps> = React.forwardRef(
  ({ ingredients, ingredientType, title }, ref: React.ForwardedRef<HTMLParagraphElement>) => {
    const location = useLocation()

    return (
      <div ref={ref}>
        <h3 className="text text_type_main-medium mb-6">{title}</h3>
        <ul className={styles.list}>
          {ingredients &&
            ingredients.map((el) => {
              if (el.type === ingredientType) {
                return (
                  <Link
                    key={el._id}
                    to={{
                      pathname: `/ingredients/${el._id}`,
                    }}
                    state={{ background: location }}
                  >
                    <IngredientsItem ingredient={el} key={el._id} id={el._id} />
                  </Link>
                )
              }
              return null
            })}
        </ul>
      </div>
    )
  }
)
