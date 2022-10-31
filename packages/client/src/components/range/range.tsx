import React from 'react'
import './range.scss'

interface IRange {
  percent: number
}

export function RangeLine(props: IRange) {
  return (
    <div className="range">
      <div
        className="range__value"
        style={{ width: props.percent + '%' }}></div>
    </div>
  )
}
