import styles from '../BurgerConstructor/BurgerConstructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useMemo, useCallback} from 'react'
import useModal from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import OrderDetails from '../OrderDetails/OrderDetails'
import {Ingredients} from '../../types/data'
import {useDrop} from 'react-dnd'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {v4 as uuidv4} from 'uuid'
import {useAppDispatch} from '../../hooks/useAppDispatch'
import {postOrder} from '../../services/actions/order'
import DraggableElement from './components/DraggableElement'
import {ADD_INGREDIENTS_TO_CONSTRUCTOR} from '../../services/actions/constructor'

const BurgerConstructor: React.FC = () => {
    const {ingredientsList} = useTypedSelector(store => store.constructorList)
    const bun = ingredientsList.find((el) => el.type === 'bun')
    const topping = ingredientsList.filter((el) => el.type !== 'bun')
    const dispatch = useAppDispatch()

    const {number} = useTypedSelector(store => store.order)

    const priceCounting = useCallback(() => {
        return (
            ingredientsList.reduce((acc: number, topping: Ingredients) => {
                if (topping.type !== 'bun') return acc + topping.price
                else return bun ? bun.price * 2 : 0
            }, 0))
    }, [ingredientsList, bun])

    const [{isHover}, dragRef] = useDrop({
        accept: 'ingredients',
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item: any) {
            // @ts-ignore
            dispatch({
                type: ADD_INGREDIENTS_TO_CONSTRUCTOR,
                data: {...item, id: uuidv4()}
            })
        }
    })

    const {
        modalState,
        toggle
    } = useModal()

    let order = []

    const getIngredientsId = () => {
        const toppingId = topping?.map((el: { _id: string }) => el._id)
        return order = [bun?._id, ...toppingId, bun?._id]
    }

    const getOrder = () => {
        toggle()
        // @ts-ignore
        dispatch(postOrder(getIngredientsId()))
    }

    return (
        <div className={`${styles.wrapper} ${isHover ? styles.drop : ''}`} ref={dragRef}>
            <div className="pl-8 mr-4">
                {
                    bun &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>
            <div className={styles.dynamicConstructor}>
                {
                    ingredientsList && ingredientsList.map((el, index) => {
                            if (el.type !== 'bun') {
                                return (
                                    <DraggableElement items={el} key={el.id} index={index}/>
                                )
                            } else return null
                        }
                    )
                }
            </div>
            <div className="pl-8 mb-10 mr-4">
                {
                    bun &&
                    <ConstructorElement
                        type="bottom"
                        text={`${bun.name} (низ)`}
                        isLocked={true}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                }
            </div>
            <div>
                {
                    (bun && topping) ? null : (
                        <p className="text text_type_main-medium">Добавьте булочку и другие ингредиенты</p>
                    )
                }
            </div>
            <div className={styles.sum}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium">{priceCounting()}</span>
                    <CurrencyIcon type="primary"/>
                </div>
                {
                    (bun && topping) ? (
                        <Button htmlType="button" type="primary" size="large" onClick={getOrder}>
                            Оформить
                        </Button>
                    ) : <Button htmlType="button" type="primary" size="large" onClick={getOrder} disabled>
                        Оформить
                    </Button>
                }
                {
                    modalState &&
                    <Modal onCloseButtonClick={getOrder}>
                        <OrderDetails order={number}/>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default BurgerConstructor
