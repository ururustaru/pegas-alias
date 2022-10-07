import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './field.scss';

export interface IField {
	register?: UseFormRegisterReturn<string>;
	type?: string;
	placeholder?: string;
}

export function Field(props: IField) {
	return (
		<input
			{...props.register}
			type={props.type}
			className={'field'}
			placeholder={props.placeholder}
		/>
	)
}
