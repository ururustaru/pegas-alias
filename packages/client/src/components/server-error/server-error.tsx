import { FC } from 'react'
import './server-error.scss'
import logo from '../../assets/images/505.png'

export const ServerError: FC = () => {
  return (
    <div className="server-error">
      <h1 className="server-error__title">Pegas Alias</h1>
      <p className="server-error__desc">Угадывый слова по-новому</p>
      <div className="server-error__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
      <h2 className="server-error__subtitle">Ошибка 505</h2>
      <p className="server-error__text">Сервер прилёг, мы уже исправляем</p>
    </div>
  )
}
