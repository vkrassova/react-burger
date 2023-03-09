import React from 'react'

import style from './preloader.module.scss'

export const Preloader: React.FC = () => {
    const items = new Array(4).fill('')

    return(
        <div className={style.wrapper}>
            {items.map((i, key) => (
                <div key={key.toString()} className={style.circ} />
            ))}
        </div>
    )
}
