import React from 'react';
import {TEvents} from '../../types/common';
import './field.scss';

export interface IField {
  name: string;
  type: string;
  class?: string;
  required?: boolean;
  value?: string;
  label?: string;
  placeholder?: string;
  minlength?: number;
  maxlength?: number;
  rule?: string;
  autocomplete?: string;
  noValidateOnBlur?: boolean;
  confirmField?: string;
  events?: TEvents;
}

function Field(props: IField) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.name}
      className={'field ' + props.class}
      placeholder={props.placeholder}
      aria-label={props.label}
      value={props.value}
      required={props.required ? true : undefined}
      data-confirm-field={props.confirmField ? props.confirmField : undefined}
      data-no-blur-validate={props.noValidateOnBlur ? 'true' : undefined}
      pattern={props.rule ? props.rule : undefined}
      minLength={props.minlength ? props.minlength : undefined}
      maxLength={props.maxlength ? props.maxlength : undefined}
      autoComplete={props.autocomplete ? props.autocomplete : undefined}
    />
  )
}

export default Field;
