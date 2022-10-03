import React from 'react';
import { TEvents } from '../../types/common';
import './breadcrumbs.scss';

interface IBreadcrumbs {
  text?: string;
  classes?: string;
  events?: TEvents;
}

export function Breadcrumbs(props: IBreadcrumbs) {
  return (
    <div className={'breadcrumbs ' + props.classes} {...props.events}>
        <div className="breadcrumbs--btn"></div>
        <div className="breadcrumbs--label">{props.text}</div>
    </div>
  )
}