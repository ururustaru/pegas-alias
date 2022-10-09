import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Intro, FormField, Button } from '../components';
import { registerUser } from '../services/http/login';
import { errorToString, pattern } from '../utils';

import './../scss/form/form.scss';

export const SignUp: React.FC = (): JSX.Element => {
	const { email, login, name, phone, password } = pattern();

	const {
		register,
		watch,
		formState: {
			errors,
		},
		handleSubmit
	} = useForm({ mode: 'onBlur' });

	const passwordField = useRef({});
	passwordField.current = watch("password", "");

	const navigate = useNavigate();

	const onSubmit = (data: Record<string, unknown>) => {
		registerUser(data)
	}

	return (
		<main>
			<Intro small />
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="form__title">Регистрация</h2>
				<div className="form__fields">
					<FormField
						register={register('email', {
							required: 'Заполните поле',
							pattern: {
								value: email,
								message: 'Некорректно введена почта'
							}
						})}
						errorText={errorToString(errors?.email)}
						placeholder="Электронная почта"
					/>
					<FormField
						register={register('login', {
							required: 'Заполните поле',
							pattern: {
								value: login,
								message: 'Некорректно введен логин'
							},
							minLength: {
								value: 3,
								message: 'Длина меньше 3'
							},
							maxLength: {
								value: 20,
								message: 'Длина больлше 20'
							}
						})}
						placeholder="Логин"
						errorText={errorToString(errors?.login)}
					/>
					<FormField
						register={register('first_name', {
							required: 'Заполните поле',
							pattern: {
								value: name,
								message: 'Некорректно введено имя'
							}
						})}
						placeholder="Имя"
						errorText={errorToString(errors?.first_name)}
					/>
					<FormField
						register={register<'second_name'>('second_name', {
							required: 'Заполните поле',
							pattern: {
								value: name,
								message: 'Некорректно введена фамилия'
							}
						})}
						placeholder="Фамилия"
						errorText={errorToString(errors?.second_name)}
					/>
					<FormField
						register={register('phone', {
							required: 'Заполните поле',
							pattern: {
								value: phone,
								message: 'Некорректно введен телефон'
							}
						})}
						placeholder="Телефон"
						errorText={errorToString(errors?.phone)}
					/>
					<FormField
						register={register('password', {
							required: 'Заполните поле',
							pattern: {
								value: password,
								message: 'Некорректно введен пароль'
							}
						})}
						type="password"
						placeholder="Пароль"
						errorText={errorToString(errors?.password)}
					/>
					<FormField
						register={register('confirm_password', {
							required: 'Заполните поле',
							validate: value => value === passwordField.current || "Пароли не совпадают",
							pattern: {
								value: password,
								message: 'Некорректно введен пароль'
							}
						})}
						type="password"
						placeholder="Пароль ещё раз"
						errorText={errorToString(errors?.confirm_password)}
					/>
				</div>

				<div className="form__buttons">
					<Button text="Создать аккаунт" type="submit" />
					<Button 
						classes="button--light"
						type='button'
						text="Уже есть аккаунт ?"
						events={{
							onClick: () => navigate('/login')
						}}
					/>
				</div>
			</form>
		</main>
	)
}

