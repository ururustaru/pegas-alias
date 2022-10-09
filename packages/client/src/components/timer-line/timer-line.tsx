import React from 'react';
import './timer-line.scss';

interface ITimerLine {
  count?: number;
  limit?: number;
}

export function TimerLine(props: ITimerLine) {
  const count = props.count;
  const limit =  props.limit;
  const widthValue = (count && limit) ? ( Math.floor(count / limit * 100).toString() + "%") : 0; 

  return (
    <div className="timer--line">
      <div className="timer--value">{ count }</div>
      <div className="timer--indicator" style={{width: widthValue}}></div>
    </div>
  )
}
