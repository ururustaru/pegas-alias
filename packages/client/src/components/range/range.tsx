import React from 'react';
import {Range} from '../../types/common';

import './range.scss';

interface IRange {
  percent: Range<0, 101>;
}

export function RangeLine(props: IRange) {
  return (
    <div className="range">
      <div className="range__value" style={{width: props.percent + '%'}}></div>
    </div>
  )
}


