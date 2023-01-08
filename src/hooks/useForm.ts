import { useState } from 'react'
import { UserModel } from '../types/responses'

const INITIAL_DATA = {
  name: '',
  email: '',
  password: '',
  code: '',
}

export const useForm = () => {
  const [userData, setUserData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<UserModel>) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        ...fields,
      }
    })
  }

  return {
    userData,
    updateFields,
  }
}
