import { FC } from 'react'
import logo from '../../assets/images/404.png'
import { Link } from 'react-router-dom'

import './not-found.scss'

export const NotFound: FC = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Pegas Alias</h1>
      <p className="not-found__desc">Угадывый слова по-новому</p>
      <div className="not-found__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
      <h2 className="not-found__subtitle">Ошибка 404</h2>
      <p className="not-found__text">Такого адреса не существует</p>
      <Link to={'/'} className="not-found__text not-found__text--link">
        Вернуться к игре
      </Link>
    </div>
  )
}
