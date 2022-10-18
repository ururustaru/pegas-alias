import React from 'react'
import logo from '../../assets/images/winner.png'
import { Link } from 'react-router-dom'
import { Button } from '../../components'
import './winner.scss'

interface IWinner {
  nameWinnerTeam: string
  score: string
}
export const Winner: React.FC<IWinner> = ({ nameWinnerTeam, score }) => {
  return (
    <div className="winner">
      <div className="winner__image-wrap">
        <img src={logo} alt="Логотип Pegas Alias с единорогом" />
      </div>
      <h1 className="winner__subtitle">Есть победитель!</h1>
      <p className="winner__text">
        Победила команда «{nameWinnerTeam}»
      </p>
      <p className="winner__score">Счет {score}</p>
      <Link to="/">
        <Button classes="button--winner" text="В главное меню" type="button" />
      </Link>
    </div>
  )
}
