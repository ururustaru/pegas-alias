import React, { ReactNode } from 'react';
import { TEvents } from '../../types/common';
import './button.scss';

interface IButton {
  text?: string;
  classes?: string;
  icon?: string | ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  events?: TEvents;
}

export function Button(props: IButton) {
  return (
    <button
      className={props.classes ? 'button ' + props.classes : 'button'}
      title={props.text}
      type={props.type ? props.type : undefined}
      disabled={props.disabled ? true : undefined}
      {...props.events}
    >
      {props.text}
      {props.icon && <span className="button__icon">{props.icon as ReactNode}</span>}
    </button>
  )
}


