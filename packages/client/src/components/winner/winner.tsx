import { FC } from 'react'
import './winner.scss'
import logo from '../../assets/images/winner.png'
import { BackLink } from '../back-link/back-link'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../button/button'

interface IWinner {
  nameWinnerTeam: string
  score: string
}
export const Winner: FC<IWinner> = ({ nameWinnerTeam, score }) => {
  const navigate = useNavigate()
  function link() {
    navigate('/')
  }
  return (
    <div className="winner">
      <div className="winner__backlink">
        <BackLink text="В главное меню" link={link} />
      </div>
      <div className="winner__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
      <h1 className="winner__subtitle">Есть победитель!</h1>
      <p className="winner__text">
        Победила команда &lt;&lt;{nameWinnerTeam}&gt;&gt;
      </p>
      <p className="winner__score">Счет {score}</p>
      <Link to="/">
        <Button classes="button--winner" text="В главное меню" type="button" />
      </Link>
    </div>
  )
}
