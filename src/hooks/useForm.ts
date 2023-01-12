import { useState } from 'react'
import { UserModel } from '../types/responses'

type TInitialForm = {
  name: string
  email: string
  password: string
  code: string
}

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
  code: '',
}

export const useForm = () => {
  const [userData, setUserData] = useState<TInitialForm>(INITIAL_FORM_DATA)

  const updateFields = (fields: Partial<UserModel>) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        ...fields,
      }
    })
  }

  const clearFields = () => {
    setUserData(INITIAL_FORM_DATA)
  }

  return {
    userData,
    updateFields,
    clearFields,
  }
}
