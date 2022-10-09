import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { getUser } from '../services/store/userSlice';
import { FormField, Button, Avatar } from './../components';

import { changeProfileAPI, getUserAPI } from '../services/http/profile';
import { errorToString, pattern } from '../utils';

import './../scss/form/form.scss';



export const Profile: React.FC = (): JSX.Element => {
  const { email, login, name, phone } = pattern();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  const {
    register,
    formState: {
      errors
    },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: user,
    mode: 'onBlur'
  });

  useEffect(() => {
    reset(user);
  }, [user])

  const navigate = useNavigate();

  const onSubmit = (data: Record<string, unknown>) => {
    changeProfileAPI(data).then(result => dispatch(getUser(result)))
  }

  return (
    <main>
      <Avatar />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__title">{user?.display_name ?? user?.login}</h2>

        <div className="form__fields">

          <FormField
            register={register('form.email', {
              required: 'Заполните поле',
              pattern: {
                value: email,
                message: 'Некорректно введена почта'
              }
            })}
            value={user?.email}
            placeholder="Почта"
            errorText={errorToString(errors?.email)}
          />

          <FormField
            register={register('form.login', {
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
            value={user?.login}
            errorText={errorToString(errors?.login)}
          />

          <FormField
            register={register('display_name', {
              minLength: {
                value: 3,
                message: 'Длина меньше 3'
              },
              maxLength: {
                value: 20,
                message: 'Длина больлше 20'
              }
            })}
            placeholder="Имя в чате"
            value={user?.display_name}
            errorText={errorToString(errors?.display_name)}
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
            value={user?.first_name}
            errorText={errorToString(errors?.first_name)}
          />

          <FormField
            register={register('second_name', {
              required: 'Заполните поле',
              pattern: {
                value: name,
                message: 'Некорректно введено фамилия'
              }
            })}
            placeholder="Фамилия"
            value={user?.second_name}
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
            value={user?.phone}
            errorText={errorToString(errors?.phone)}
          />

        </div>

        <div className="form__buttons">
          <Button
            text="Сохранить"
            type="submit"
          />
          <Button
            classes="button--light"
            type='button'
            text="Изменить пароль"
            events={{
              onClick: () => navigate('/change-password')
            }}
          />
          <Button
            classes="button--alert"
            type='button'
            text="Выйти из аккаунта"
            events={{
              onClick: () => navigate('/login')
            }}
          />
        </div>
      </form>
    </main>
  )
}


