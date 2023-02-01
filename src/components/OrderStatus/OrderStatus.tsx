import React from 'react'
import status from './OrderStatus.module.scss'

export const OrderStatus: React.FC = () => {
  return (
    <>
      <div className={status.info}>
        <div className={status.column}>
          <h3 className="text text_type_main-medium mb-6">Готовы:</h3>
          <ul className={status.list}>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
          </ul>
        </div>
        <div className={status.column}>
          <h3 className="text text_type_main-medium mb-6">В работе:</h3>
          <ul className={status.list}>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
            <li className={'text text_type_digits-default mb-2'}>034533</li>
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
