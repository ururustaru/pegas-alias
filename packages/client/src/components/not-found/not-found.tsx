import { FC } from 'react'
import './not-found.scss'
import logo from '../../assets/images/404.png'
import { BackLink } from '../back-link/back-link'
import { Link, useNavigate } from 'react-router-dom'

export const NotFound: FC = () => {
  const navigate = useNavigate()
  function link() {
    navigate('/')
  }
  return (
    <div className="not-found">
      <div className="not-found__backlink">
        <BackLink text="В главное меню" link={link} />
      </div>
      <h1 className="not-found__title">Pegas Alias</h1>
      <p className="not-found__desc">Угадывый слова по-новому</p>
      <div className="not-found__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
      <h2 className="not-found__subtitle">Ошибка 404</h2>
      <p className="not-found__text">Такого адреса не существует</p>
      <Link to={'/'} className="not-found__text not-found__text_link">
        Вернуться к игре
      </Link>
    </div>
  )
}
