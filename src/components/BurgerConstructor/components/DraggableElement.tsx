import styles from '../BurgerConstructor.module.scss'
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useRef} from 'react'
import {Ingredients} from '../../../types/data'
import type { Identifier } from 'dnd-core'
import {useDrop, useDrag, DropTargetMonitor} from 'react-dnd'
import {useAppDispatch} from '../../../hooks/useAppDispatch'
import {MOVE_CARD} from '../../../services/actions/constructor'

interface DraggableElementProps {
    items: Ingredients,
    index: number
}

interface DragItem {
    index: number;
    id: string;
    type: string;
}

const DraggableElement: React.FC<DraggableElementProps> = ({items, index}) => {
    const { image, price, name } = items;
    const dispatch = useAppDispatch()
    const ref = useRef<HTMLDivElement | null>(null)

    const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: 'item',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId()
            }
        },
        hover: function (item, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            dispatch({
                type: MOVE_CARD,
                dragIndex: dragIndex,
                hoverIndex: hoverIndex
            })

            item.index = hoverIndex;
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
