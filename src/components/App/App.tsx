import React, { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader'
import { getIngredients } from '../../services/actions/ingredients'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import {AppRoutes} from '../../constants';
import {Main} from '../../pages/Main/Main';

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <>
      <AppHeader />
        <Routes>
            <Route index path={AppRoutes.Main} element={<Main/>} />
        </Routes>
    </>
  )
}

export default App
