import React from 'react'
import { refreshTokenRequest } from './api'

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const getRect = (element: null | undefined | HTMLElement): DOMRect => {
  return element!.getBoundingClientRect()
}

export const tabsClickHandler = (ref: React.RefObject<HTMLElement>) => {
  if (ref.current === null) return
  ref.current.scrollIntoView({ behavior: 'smooth' })
}
