import React, { useCallback } from 'react'
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useModal, useAppDispatch, useTypedSelector } from '../../hooks'
import { Ingredients } from '../../types/data'
import { useDrop } from 'react-dnd'
import { postOrder } from '../../services/actions/order'
import { DraggableElement } from './components/DraggableElement'
import { addToConstructor } from '../../services/actions/constructor'
import { MODAL_CLOSE } from '../../services/actions/modal'
import { RESET_INGREDIENTS } from '../../services/actions/constructor'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '../../constants'
import styles from '../BurgerConstructor/BurgerConstructor.module.scss'
import { OrderDetails } from '../OrderDetails/OrderDetails'
import { Modal } from '../Modal/Modal'

export const BurgerConstructor: React.FC = () => {
  const { ingredientsList, bun } = useTypedSelector((store) => store.constructorList)
  const { orderRequest, orderFailed } = useTypedSelector((store) => store.order)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { number } = useTypedSelector((store) => store.order)
  const { isAuth } = useTypedSelector(({ user }) => user)

  const priceCounting = useCallback(() => {
    const totalIngredientsPrice = ingredientsList.reduce((acc: number, topping: Ingredients) => {
      return acc + topping.price
    }, 0)
    const totalBunPrice = bun ? bun.price * 2 : 0

    return totalIngredientsPrice + totalBunPrice
  }, [ingredientsList, bun])

  const [{ isHover }, dragRef] = useDrop<Ingredients, void, { isHover: boolean }>({
    accept: 'ingredients',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(addToConstructor(item))
    },
  })

  const { modalState, toggle } = useModal()

  const getIngredientsId = () => {
    const toppingId = ingredientsList?.map((el) => el._id)
    return [bun?._id, ...toppingId, bun?._id]
  }

  const getOrder = () => {
    if (isAuth) {
      toggle()
      dispatch(postOrder(getIngredientsId()))
    } else {
      navigate(AppRoutes.SignIn)
    }
  }

  const modalClose = () => {
    toggle()

    dispatch({
      type: MODAL_CLOSE,
    })

    dispatch({
      type: RESET_INGREDIENTS,
    })
  }

  return (
    <div className={`${styles.wrapper} ${isHover ? styles.drop : ''}`} ref={dragRef}>
      <div className="pl-8 mr-4">
        {bun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name} (верх)`}
            price={bun.price}
            thumbnail={bun.image}
          />
        )}
      </div>
      <div className={styles.dynamicConstructor}>
        {ingredientsList.map((el: Ingredients, index: number) => {
          return <DraggableElement items={el} key={el.id} index={index} />
        })}
      </div>
      <div className="pl-8 mb-10 mr-4">
        {bun && (
          <ConstructorElement
            type="bottom"
            text={`${bun.name} (низ)`}
            isLocked={true}
            price={bun.price}
            thumbnail={bun.image}
          />
        )}
      </div>
      <div>
        {bun && ingredientsList.length ? null : (
          <p className="text text_type_main-medium">Добавьте булочку и другие ингредиенты</p>
        )}
      </div>
      <div className={styles.sum}>
        <div className="mr-10">
          <span className="text text_type_digits-medium">{priceCounting()}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={getOrder}
          disabled={!(bun && ingredientsList.length)}
        >
          Оформить
        </Button>
        {modalState && (
          <Modal onCloseButtonClick={modalClose}>
            {orderRequest && <p className="text text_type_main-large">Загрузка...</p>}
            {!orderFailed && !orderRequest && <OrderDetails order={number} />}
          </Modal>
        )}
      </div>
    </div>
  )
}
