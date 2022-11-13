import { Ingredients } from '../../../../types/data'
import React from 'react'
import styles from '../../BurgerIngredients.module.scss'
import IngredientsItem from '../IngredientsItem/IngredientsItem'

interface IngredientsListProps {
  ingredientType: string
  title: string
  ingredients: Ingredients[]
  ref: React.ForwardedRef<HTMLParagraphElement>
  showDetails: Function
}

const BurgerCategory: React.FC<IngredientsListProps> = React.forwardRef(
  ({ ingredients, ingredientType, title, showDetails }, ref: React.ForwardedRef<HTMLParagraphElement>) => {
    return (
      <div ref={ref}>
        <h3 className="text text_type_main-medium mb-6">{title}</h3>
        <ul className={styles.list}>
          {ingredients &&
            ingredients.map((el) => {
              if (el.type === ingredientType) {
                return <IngredientsItem ingredient={el} key={el._id} showDetails={showDetails} />
              } else return null
            })}
        </ul>
      </div>
    )
  }
)

export default BurgerCategory
