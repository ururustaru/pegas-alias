import React from 'react';
import Intro from '../../components/intro/intro';
import './sign-up.scss';

const SignUp: React.FC = (): JSX.Element => {
  return (
    <main className='login'>
      {/* <Intro/> */}
      <form className='login__form'>
        <h2 className='login__title'>Регистрация</h2>
        <input className='login__input' type="text"  placeholder='Электронная почта'/>
        <input className='login__input' type="text"  placeholder='Логин'/>
        <input className='login__input' type="text"  placeholder='Имя'/>
        <input className='login__input' type="text"  placeholder='Фамилия'/>
        <input className='login__input' type="text"  placeholder='Телефон'/>
        <input className='login__input' type="password"  placeholder='Пароль'/>
        <input className='login__input' type="password"  placeholder='Пароль'/>
        <button className='login__button login__butto_main' type="button">Создать аккаунт</button>
        <button className='login__button login__butto_default' type="button">Уже есть аккаунт ?</button>
      </form>
    </main>
  )
}

export default SignUp;
