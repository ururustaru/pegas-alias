import React from 'react'
import './timer.scss'

interface ITimer {
  count?: number
  limit?: number
}

export function Timer(props: ITimer) {
  const count = props.count
  const limit = props.limit

  /**
   * Получение строки с процентным соотношением оставшегося времени раунда к общему времени раунда
   *
   * @param {count} Оставшееся время раунда в ms.
   * @param {limit} Общее время раунда в ms.
   * @returns {string} Строка вида "15%".
   */
  const widthValue: string =
    count && limit ? Math.floor((count / limit) * 100).toString() + '%' : '0'

  return (
    <div className="timer">
      <div className="timer__value">{count}</div>
      <div className="timer__indicator" style={{ width: widthValue }}></div>
    </div>
  )
}
