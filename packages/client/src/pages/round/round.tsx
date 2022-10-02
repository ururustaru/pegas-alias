import React from 'react';
import { useForm } from 'react-hook-form';

import { FormField, Button } from '../../components';
import { errorToString, pattern } from '../../utils';

import './../../components/form/form.scss';

export const Round: React.FC = (): JSX.Element => {

	const {
		register,
		formState: {
			errors
		},
		handleSubmit
	} = useForm({ mode: 'onBlur' });

	const onSubmit = (data: Record<string, unknown>) => {
		console.log(data)
	}

	return (
		<main>

			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="form__title">Новая игра</h2>

				<div className="form__fields">
					<Button classes="button--light button--icon-l button--select" text="Выберите словарь" icon={<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4C15.1046 4 16 4.89543 16 6V20C16 21.1046 15.1046 22 14 22H2C0.895431 22 0 21.1046 0 20V2.5C0 1.39543 0.89543 0.5 2 0.5H14C14.5523 0.5 15 0.947715 15 1.5C15 2.05228 14.5523 2.5 14 2.5H3.25C2.83579 2.5 2.5 2.83579 2.5 3.25C2.5 3.66421 2.83579 4 3.25 4H6C6.55228 4 7 4.44772 7 5V13.7929C7 14.2383 7.53857 14.4614 7.85355 14.1464L9.64645 12.3536C9.84171 12.1583 10.1583 12.1583 10.3536 12.3536L12.1464 14.1464C12.4614 14.4614 13 14.2383 13 13.7929V5C13 4.44772 13.4477 4 14 4Z" fill="#3B4F7D"/>
</svg>} />
					<h2>Команды</h2>
					<Button classes="button--light" text="Цари зверей" />
					<Button classes="button--light" text="+ Добавить команду" />
				</div>

				<h2>Правила</h2>
				<p>Длина раунда</p>
				<p>1 минута</p>
				<div>+10 сек</div> <div>-10 сек</div>

				<p>Количество слов для победы</p>
				<p>100</p>
				<div>+10 слов</div> <div>-10 слов</div>

				<input type="checkbox" value="Последнее слово для всех"/>
				<div className="form__buttons">
					<Button
						text="Начать игру"
						type="submit"
					/>
				</div>
			</form>
		</main>
	)
}


