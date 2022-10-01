import React from 'react';
import Intro from '../../components/intro/intro';
import FormField from '../../components/form-field/form-field';
import Button from '../../components/button/button';

import './../../components/form/form.scss';

const Login: React.FC = (): JSX.Element => {
  const testButton = (e: Event): void => {
    e.preventDefault();
    console.log('Кнопка нажимается');
  }

  return (
    <main>
      <Intro/>
      <form className="form">
        <h2 className="form__title">Вход в систему</h2>

        <div className="form__fields">
          <FormField name="name" type="text" placeholder="Логин"/>
          <FormField name="password" type="password"
            placeholder="Пароль"
            errorText="Введён неправильный пароль"
          />
        </div>

        <div className="form__buttons">
          <Button
            text="Авторизоваться"
            type="button"
            events={{
              'onClick': testButton
            }}
          />
          <Button classes="button--light" text="Ещё нет аккаунта ?"/>
        </div>
      </form>
    </main>
  )
}

export default Login;
