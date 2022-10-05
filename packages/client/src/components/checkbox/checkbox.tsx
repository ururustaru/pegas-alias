import React from 'react';
import './checkbox.scss';

interface ICheckBox {
  classes?: string;
  text?: string;
}

export function CheckBox(props: ICheckBox) {
  return (
    <div className={props.classes ? 'checkbox ' + props.classes : 'checkbox'}>
      <input type="checkbox" className="checkbox__input" id="last-word" name="last-word" />
      <label className="checkbox__label" htmlFor="last-word">{props.text}</label>
    </div>
  )
}


