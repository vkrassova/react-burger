import React from 'react'

import { declension, diffDays } from '../../utils'

type formattedDateProps = {
  date: string | number | Date
}

export const FormattedDate: React.FC<formattedDateProps> = ({ date }) => {
  const days = diffDays(new Date(date), new Date())

  const createdDay =
    days === 0 ? 'Сегодня' : days === 1 ? 'Вчера' : `${days} ${declension(days, 'день,дня,дней')} назад`

  const createdTime = new Date(date).toLocaleTimeString('ru-RU', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
  })

  return <div>{`${createdDay} ${createdTime}`}</div>
}
