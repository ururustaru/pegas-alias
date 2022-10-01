import React from 'react';
import Intro from '../../components/intro/intro';
import FormField from '../../components/form-field/form-field';
import Button from '../../components/button/button';

const SignUp: React.FC = (): JSX.Element => {
  return (
    <main>
      <Intro small/>
      <form className="form">
        <h2 className="form__title">Регистрация</h2>
        <div className="form__fields">
          <FormField name="email" type="email" placeholder="Электронная почта"/>
          <FormField name="login" type="text" placeholder="Логин"/>
          <FormField name="first_name" type="text" placeholder="Имя"/>
          <FormField name="second_name" type="text" placeholder="Фамилия"/>
          <FormField name="phone" type="text" placeholder="Телефон"/>
          <FormField name="password" type="password"
            placeholder="Пароль"
            errorText="Введён неправильный пароль"
          />
          <FormField name="confirm-password" type="password"
            placeholder="Пароль ещё раз"
          />
        </div>

        <div className="form__buttons">
          <Button text="Создать аккаунт" type="button"/>
          <Button classes="button--light" text="Уже есть аккаунт ?"/>
        </div>
      </form>
    </main>
  )
}

export default SignUp;
