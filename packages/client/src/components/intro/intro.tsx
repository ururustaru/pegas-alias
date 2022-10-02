import React from 'react';
import './intro.scss';
import logo from './../../assets/images/logo-round-shadow.png';

interface IIntro {
  small?: boolean;
}

export function Intro(props: IIntro) {
  return (
    <div className={props.small ? 'intro intro--small' : 'intro'}>
      <h1 className="intro__title">Pegas Alias</h1>
      <p className="intro__desc">Угадывый слова по-новому</p>
      <div className="intro__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом"/>
      </div>
    </div>
  )
}

