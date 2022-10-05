import React from 'react';
import {Range} from '../../types/common';

import './range.scss';

interface IRange {
  percent: Range<0, 100>;
}

export function Range(props: IRange) {
  return (
    <div className="range">
      <div className="range__value" data-value={props.percent}></div>
    </div>
  )
}


