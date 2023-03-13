import React from 'react'

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

export function getAccessToken() {
  return window.localStorage.getItem('accessToken')
}

export const declension = (value: number, words: string): string => {
  const items = words.split(',')
  const array = [2, 0, 1, 1, 1, 2]

  const index = value % 100 > 4 && value % 100 < 20 ? 2 : array[value % 10 < 5 ? value % 10 : 5]

  return items[index]
}

export const diffDays = (date1: Date, date2: Date): number => {
  const diff = new Date(+date1).setHours(12) - new Date(+date2).setHours(12)
  return Math.abs(Math.round(diff / 8.64e7))
}
