import React from 'react';
import Intro from '../../components/intro/intro';
import './login.scss';

const Login: React.FC = (): JSX.Element => {
  return (
    <main className='login'>
      <Intro/>
      <form className='login__form'>
        <h2 className='login__title'>Вход в систему</h2>
        <input className='login__input' type="text"  placeholder='Логин'/>
        <input className='login__input' type="password"  placeholder='Пароль'/>
        <button className='login__button login__butto_main' type="button">Авторизоваться</button>
        <button className='login__button login__butto_default' type="button">Ещё нет аккаунта ?</button>
      </form>
    </main>
  )
}

export default Login;
