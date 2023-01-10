import React from 'react'
import {Link} from 'react-router-dom'
import {AppRoutes} from '../../constants'
import image from '../../images/404.jpg'
import style from './NotFound.module.scss'

export const NotFound: React.FC = () => {
    return (
        <>
            <div className={style.notFound}>404</div>
            <img src={image} alt={'not found'} className={style.image}/>
            <p className={style.text}>It looks like you're lost...</p>

            <Link to={AppRoutes.Main} className={style.link}>GO HOME</Link>
        </>
    )
}
