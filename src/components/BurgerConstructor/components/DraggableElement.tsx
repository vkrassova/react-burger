import styles from '../BurgerConstructor.module.scss'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useRef} from 'react'
import {Ingredients} from '../../../types/data'
import {useDrop, useDrag, DropTargetMonitor} from "react-dnd"
import {useAppDispatch} from '../../../hooks/useAppDispatch'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {getIngredients} from '../../../services/actions/constructor'

interface DraggbleElementProps {
    item: Ingredients
}

const DraggableElement: React.FC<DraggbleElementProps> = ({item}) => {
    const dispatch = useAppDispatch()
    const {ingredientsList} = useTypedSelector(store => store.constructorList)
    const ref = useRef<HTMLDivElement | null>(null)

    // @ts-ignore
    const [{handlerId}, drop] = useDrop({
        accept: "ingredient",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(item: any, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.item.id
            const hoverIndex = item.id

            if (dragIndex === hoverIndex) {
                return
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset!.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            const dragCard = ingredientsList.find(card => card._id === dragIndex)
            const hoverCard = ingredientsList.find(card => card._id === hoverIndex)

            const newCards = ingredientsList.map(item =>
                item._id === dragCard?._id ? hoverCard
                    : item._id === hoverCard?._id ? dragCard
                        : item)

            // @ts-ignore
            dispatch(getIngredients(newCards))
        }
    })

    const [{ isDragging }, drag] = useDrag({
        type: "ingredient",
        // @ts-ignore
        item: () => ({ item }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    const opacity = isDragging ? 0 : 1

    return (
        <div className={styles.item}
             style={{ opacity }}
             ref={ref}
             onDrop={(e) => e.preventDefault()}
             data-handler-id={handlerId}>
            <DragIcon type="primary"/>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
            />
        </div>
    )
}

export default DraggableElement