import {Link} from 'react-router-dom'
import React from 'react';
import './buttons-navigation.scss';

export function ButtonsNavigation() {  
  return (
    <nav className="buttons-navigation">
      <ul className="buttons-navigation__list">
        <li className="buttons-navigation__item buttons-navigation__item--big">
          <Link className="buttons-navigation__link buttons-navigation__link--rocket" to="/new-game">Новая игра</Link>
        </li>
        <li className="buttons-navigation__item">
          <Link className="buttons-navigation__link buttons-navigation__link--profile" to="/profile">Профиль</Link>
        </li>
        <li className="buttons-navigation__item">
          <Link className="buttons-navigation__link buttons-navigation__link--rules" to="/rules">Правила</Link>
        </li>
        <li className="buttons-navigation__item">
          <Link className="buttons-navigation__link buttons-navigation__link--forum" to="/forum">Форум</Link>
        </li>
        <li className="buttons-navigation__item">
          <Link className="buttons-navigation__link buttons-navigation__link--leaders" to="/leaders">Лидеры</Link>
        </li>
      </ul>
    </nav>
  )
}
