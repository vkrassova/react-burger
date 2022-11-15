import styles from '../../BurgerIngredients.module.scss'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { useDrag } from 'react-dnd'
import { Ingredients } from '../../../../types/data'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

type IngredientsItemProps = {
  ingredient: Ingredients
  showDetails: Function
  id: string
}

const IngredientsItem: React.FC<IngredientsItemProps> = ({ ingredient, showDetails, id }) => {
  const { ingredients } = useTypedSelector((store) => store.ingredients)
  const { ingredientsList } = useTypedSelector((store) => store.constructorList)
  const bun = ingredientsList.find((el) => el.type === 'bun')
  const topping = ingredientsList.filter((el) => el.type !== 'bun')

  const element = ingredients.find((el: Ingredients) => el._id === id)

  const counter = React.useMemo(() => {
    let count = 0

    if (element?.type !== 'bun') {
      topping.map((el) => {
        if (el._id === element?._id) {
          ++count
        }
      })
    } else if (bun?._id === element?._id) {
      count = 2
    }
    return count
  }, [ingredientsList])

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredients',
    item: { ...ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
    <li className={styles.item} ref={dragRef} style={{ opacity }} onClick={() => showDetails(ingredient)}>
      <div className={styles.img__wrapper}>
        <Counter count={counter} size="default" />
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={styles.priceWrapper}>
        <span className="text text_type_digits-default pr-2">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.ingredientsText} text text_type_main-default`}>{ingredient.name}</p>
    </li>
  )
}

export default IngredientsItem
