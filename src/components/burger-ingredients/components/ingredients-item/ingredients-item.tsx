import React from 'react'
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrag } from 'react-dnd'
import { Ingredients } from '../../../../types/data'
import { useTypedSelector } from '../../../../hooks'
import styles from '../../burger-ingredients.module.scss'
import { Link, useLocation } from "react-router-dom";

type IngredientsItemProps = {
  ingredient: Ingredients
  id: string
}

export const IngredientsItem: React.FC<IngredientsItemProps> = ({ ingredient, id }) => {
  const { ingredients } = useTypedSelector((store) => store.ingredients)
  const { ingredientsList, bun } = useTypedSelector((store) => store.constructorList)

  const element = ingredients.find((el: Ingredients) => el._id === id)

  const location = useLocation()

  const counter = React.useMemo(() => {
    let count = 0

    if (element?.type !== 'bun') {
      ingredientsList.map((el) => {
        if (el._id === element?._id) {
          ++count
        }
      })
    } else if (bun?._id === element?._id) {
      count = 2
    }
    return count
  }, [ingredientsList, bun, element])

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredients',
    item: { ...ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  })

  return (
      <li className={styles.item} ref={dragRef} style={{ opacity }}>
        <Link
          key={ingredient._id}
          to={{
            pathname: `/ingredients/${ingredient._id}`,
          }}
          state={{ background: location }} className={"ingredients-link"}
        >
        <div className={styles.img__wrapper}>
          {counter > 0 && <Counter count={counter} size="default" />}
          <img src={ingredient.image} alt={ingredient.name} />
        </div>
        <div className={styles.priceWrapper}>
          <span className="text text_type_digits-default pr-2">{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.ingredientsText} text text_type_main-default`}>{ingredient.name}</p>
        </Link>
      </li>
  )
}
