import React from 'react';
import {TEvents} from '../../types/common';
import './button.scss';

interface IButton {
  text?: string;
  classes?: string;
  icon?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  events?: TEvents;
}

function Button(props: IButton) {
  return (
    <button
      className={'button ' + props.classes}
      title={props.text}
      type={props.type ? props.type : undefined}
      disabled={props.disabled ? true : undefined}
      {...props.events}
    >
      {props.text}
      {props.icon && <span className="button__icon">{props.icon}</span>}
    </button>
  )
}

export default Button;
