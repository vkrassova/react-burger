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
import {ADD_INGREDIENTS_TO_CONSTRUCTOR, ADD_BUN, addBun} from '../../services/actions/constructor';

const BurgerConstructor: React.FC = () => {
    const {ingredientsList, bun} = useTypedSelector(store => store.constructorList)
    const dispatch = useAppDispatch()

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
            // if (item.type === 'bun') {
            //     // @ts-ignore
            //     dispatch(addBun(item._id))
            // } else {
            //     // @ts-ignore
            //     dispatch({
            //         type: ADD_INGREDIENTS_TO_CONSTRUCTOR,
            //         data: {...item, id: uuidv4()}
            //     })
            // }
        }
    })

    const {
        modalState,
        toggle
    } = useModal()

    const getIngredientsId = (ingredients: Ingredients[]) => {
        return [...ingredients].map((e) => e._id);
    }

    const getOrder = () => {
        toggle()
        // @ts-ignore
        dispatch(postOrder(getIngredientsId(ingredientsList)))
    }

    const targetClassName = `${styles.wrapper} ${isHover ? styles.drop : ''}`

    // @ts-ignore

    return (
        <div className={`${styles.wrapper}`} ref={dragRef}>
            <div className="pl-8 mr-4">

                {/*{*/}
                {/*    bun && bun.map((el) =>*/}
                {/*        <ConstructorElement*/}
                {/*            type="top"*/}
                {/*            isLocked={true}*/}
                {/*            text={`${el[0].name} (верх)`}*/}
                {/*            price={el[0].price}*/}
                {/*            thumbnail={el[0].image}*/}
                {/*        />)*/}
                {/*}*/}


            </div>
            <div className={styles.dynamicConstructor}>
                {
                    ingredientsList && ingredientsList.map((el, index) =>

                        <DraggableElement items={el} key={el.id} index={index}/>
                    )
                }
            </div>

            <div className="pl-8 mb-10 mr-4">
                {
                    bun?.length === 0 ? null : (
                        <ConstructorElement
                            type="bottom"
                            // @ts-ignore
                            text={`${bun?.name} (низ)`}
                            isLocked={true}
                            // @ts-ignore
                            price={bun?.price}
                            // @ts-ignore
                            thumbnail={bun?.image}
                        />
                    )
                }

            </div>
            <div className={styles.sum}>
                <div className="mr-10">
                    <span className="text text_type_digits-medium"></span>
                    <CurrencyIcon type="primary"/>
                </div>

                <Button htmlType="button" type="primary" size="large" onClick={getOrder}>
                    Оформить
                </Button>
                {
                    modalState &&
                    <Modal onCloseButtonClick={toggle}>
                        <OrderDetails order={'5555'}/>
                    </Modal>
                }
            </div>
        </div>
    )
}

export default BurgerConstructor
