import { Ingredients } from '../../../../types/data'
import React from 'react'
import styles from '../../BurgerIngredients.module.scss'
import IngredientsItem from '../IngredientsItem/IngredientsItem'
import { Link, useLocation } from "react-router-dom"

interface IngredientsListProps {
  ingredientType: string
  title: string
  ingredients: Ingredients[]
  ref: React.ForwardedRef<HTMLParagraphElement>
  showDetails: Function
}

const BurgerCategory: React.FC<IngredientsListProps> = React.forwardRef(
  ({ ingredients, ingredientType, title, showDetails }, ref: React.ForwardedRef<HTMLParagraphElement>) => {
      const location = useLocation()

    return (
      <div ref={ref}>
        <h3 className="text text_type_main-medium mb-6">{title}</h3>
        <ul className={styles.list}>
          {ingredients &&
            ingredients.map((el) => {
              if (el.type === ingredientType) {
                return (
                    <Link key={el._id} to={{
                        pathname: `/ingredients/${el._id}`
                    }}>
                        <IngredientsItem ingredient={el} key={el._id} showDetails={showDetails} id={el._id} />
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

export default BurgerCategory
