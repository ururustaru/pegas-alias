import React from 'react';
import './intro.scss';
import logo from './../../assets/images/logo-round-shadow.png';

export interface IIntro {
  small?: boolean;
  logo?: string;
}

export function Intro(props: IIntro) {
  return (
    <div className={'intro ' + (props.small ? 'intro--small' : '')}>

      {!props.small &&
				<>
					<h1 className="intro__title">Pegas Alias</h1>
					<p className="intro__desc">Угадывый слова по-новому</p>
				</>
      }

      <div className="intro__image-wrap">
        <img src={props.logo ?? logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
    </div>
  )
}

