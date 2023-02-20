import React from 'react'
import status from './OrderStatus.module.scss'
import { useTypedSelector } from '../../hooks'
import { Orders, StatusCodes } from '../../types/data'

export const OrderStatus: React.FC = () => {
  const { messages } = useTypedSelector((store) => store.ws)

  let doneOrders: Orders[] = []
  let pendingOrders: Orders[] = []

  if (messages?.orders !== undefined) {
    const readyOrders = messages?.orders.filter((el) => {
      return el.status === StatusCodes.done
    })

    pendingOrders = messages?.orders.filter((el) => {
      return el.status === StatusCodes.pending
    })

    doneOrders = readyOrders.slice(0, 11)
  }

  return (
    <>
      <div className={status.info}>
        <div className={status.column}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={status.list}>
            {doneOrders.map((el) => {
              return (
                <li className={'text text_type_digits-default mb-2'} key={el._id}>
                  {el.number}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={status.column}>
          <h3 className={`text text_type_main-medium mb-6`}>В работе:</h3>
          <ul className={status.list}>
            {pendingOrders.map((el) => {
              return (
                <li className={'text text_type_digits-default mb-2'} key={el._id}>
                  {el.number}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className={`mt-15`}>
        <h3 className="text text_type_main-medium">Выполнено за все время:</h3>
        <p className={`${status.text} text text_type_digits-large`}>453244</p>
      </div>
      <div className={`mt-15`}>
        <h3 className="text text_type_main-medium">Выполнено за сегодня:</h3>
        <p className={`${status.text} text text_type_digits-large`}>234234</p>
      </div>
    </>
  )
}
