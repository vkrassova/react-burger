import React from 'react'
import {Link} from 'react-router-dom'
import {AppRoutes} from '../../constants'

export const NotFound: React.FC = () => {
    return(
        <>
            <div>
                404
            </div>
            <p className="text text_color_error text_type_main-large">
                It looks like you're lost...
            </p>

            <Link to={AppRoutes.Main}>
                GO BACK
            </Link>
        </>
    )
}