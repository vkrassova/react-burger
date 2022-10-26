import styles from '../BurgerConstructor.module.scss'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useRef} from 'react'
import {Ingredients} from '../../../types/data'
import {useDrop, useDrag, DropTargetMonitor} from 'react-dnd'
import {useAppDispatch} from '../../../hooks/useAppDispatch'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
import {MOVE_CARD} from '../../../services/actions/constructor'

interface DraggbleElementProps {
    items: Ingredients,
    index: string | number
}

const DraggableElement: React.FC<DraggbleElementProps> = ({items, index}) => {
    const { image, _id, price, name } = items;
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement | null>(null)

    const [{handlerId}, drop] = useDrop({
        accept: 'item',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover(items: any, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = items.item
            const hoverIndex = index

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

            dispatch({
                type: MOVE_CARD,
                data: {dragIndex, hoverIndex}
            })

            items.index = hoverIndex;
        }
    })

    const [{isDragging}, drag] = useDrag({
        type: 'item',
        item: () => {
            return { id: items._id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    drag(drop(ref))

    const opacity = isDragging ? 0 : 1

    return (
        <div className={styles.item}
             style={{opacity}}
             ref={ref}
             onDrop={(e) => e.preventDefault()}
             data-handler-id={handlerId}>
            <DragIcon type="primary"/>
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image}
            />
        </div>
    )
}

export default DraggableElement
