import React, { useCallback } from 'react'
import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useModal, useTypedSelector } from '../../hooks'
import { Ingredients } from '../../types/data'
import { useDrop } from 'react-dnd'
import { postOrder } from '../../services/actions/order'
import { addToConstructor } from '../../services/actions/constructor'
import { AppRoutes } from '../../constants'
import { useNavigate } from 'react-router-dom'
import styles from './burger-constructor.module.scss'
import { Modal, Preloader, OrderDetails } from '../../components'
import { DraggableElement } from './components'
import { constructorActions } from '../../services/constants'

export const BurgerConstructor: React.FC = () => {
  const { ingredientsList, bun } = useTypedSelector((store) => store.constructorList)
  const { orderRequest, orderFailed, order } = useTypedSelector((store) => store.order)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { user } = useTypedSelector(({ user }) => user)

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

  const getIngredientsId = (): (string | undefined)[] => {
    const toppingId = ingredientsList?.map((el) => el._id)
    return [bun?._id, ...toppingId, bun?._id]
  }

  const getOrder = () => {
    if (user) {
      toggle()
      dispatch(postOrder(getIngredientsId()))
    } else {
      navigate(AppRoutes.SignIn)
    }
  }

  const modalClose = () => {
    toggle()

    dispatch({
      type: constructorActions.RESET_INGREDIENTS,
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
          <Modal onClose={modalClose}>
            {orderRequest && (
              <>
                <p className="text text_type_main-large mb-10 mt-6">Загрузка</p>
                <Preloader />
              </>
            )}
            {!orderFailed && !orderRequest && <OrderDetails number={order?.number} />}
          </Modal>
        )}
      </div>
    </div>
  )
}
