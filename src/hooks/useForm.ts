import { useState } from 'react'
import { FormData } from '../types/form'

const INITIAL_DATA = {
  name: '',
  email: '',
  password: '',
  code: '',
}

export const useForm = () => {
  const [userData, setUserData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
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
