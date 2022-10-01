import React from 'react';
import './form-field.scss';
import Field from '../field/field';
import {TEvents} from '../../types/common';

interface IFormField {
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
  info?: string;
  errorText?: string;
}

function FormField(props: IFormField) {
  return (
    <div className={props.errorText ? 'form-field form-field--error' : 'form-field'}>
      <Field {...props} />
      <span className="form-field__info">{props.errorText}</span>
    </div>
  )
}

export default FormField;
