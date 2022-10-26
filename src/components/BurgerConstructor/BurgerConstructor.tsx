import styles from '../BurgerConstructor/BurgerConstructor.module.scss'
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState, useMemo, useEffect} from 'react'
import useModal from '../../hooks/useModal'
import Modal from '../Modal/Modal'
import OrderDetails from '../OrderDetails/OrderDetails'
import {Ingredients} from '../../types/data'
import {useDrop} from 'react-dnd'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {v4 as uuidv4} from 'uuid'
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {postOrder} from '../../services/actions/order';
import DraggableElement from './components/DraggableElement';
import {ADD_INGREDIENTS_TO_CONSTRUCTOR} from '../../services/actions/constructor';

const BurgerConstructor: React.FC = () => {
    const {ingredientsList} = useTypedSelector(store => store.constructorList)
    const bun = ingredientsList.find((el) => el.type === 'bun', [0])
    const dispatch = useAppDispatch()

    const {number} = useTypedSelector(store => store.order)

    const itemsId = useMemo(
        () => ingredientsList.map((item) => item._id),
        [ingredientsList])

    const initialTotalPrice = {price: 0}

    const [total, setTotal] = useState(initialTotalPrice.price)

    useEffect(() => {
        const totalPrice = ingredientsList.reduce((accumulator: number, currentValue: Ingredients) => {
            if (currentValue.type === 'bun') return accumulator + currentValue.price * 2;
            else return accumulator + currentValue.price;
        }, initialTotalPrice.price)

        setTotal(totalPrice)
        console.log(total)
    }, [ingredientsList])

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

    const getOrder = () => {
        toggle()
        // @ts-ignore
        dispatch(postOrder(itemsId))
    }

    const targetClassName = `${styles.wrapper} ${isHover ? styles.drop : ''}`

    // @ts-ignore
    return (
        <div className={targetClassName} ref={dragRef}>
            <div className="pl-8 mr-4">

                {
                    bun ?
                        (<ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />) : <p className="text text_type_main-medium">Добавьте булочку</p>
                }


            </div>
            <div className={styles.dynamicConstructor}>
                {
                    ingredientsList && ingredientsList.map((el, index) => {
                            if (el.type !== 'bun') {
                                return (
                                    <DraggableElement items={el} key={el.id} index={index}/>
                                )
                            }
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
            <div className={styles.sum}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium">{total}</span>
                    <CurrencyIcon type="primary"/>
                </div>

                {
                    (bun && ingredientsList.length > 0) ? (
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
