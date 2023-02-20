import React from 'react'
import style from './OrderImage.module.scss'

type OrderImageProps = {
  src: string
  count?: number
}

export const OrderImage: React.FC<OrderImageProps> = ({ src, count }) => {
  return (
    <div className={style.item}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <img src={src} alt={'order ingredient'} />
          {count && <div className={`${style.count} text text_type_main-default`}>{`+${count}`}</div>}
        </div>
      </div>
    </div>
  )
}
