import { FC } from 'react'
import { Button } from '../button/button'
import './score-in-round.scss'

interface IScoreCommnad {
  nameTeam: string
  scoreTeam: number
  id: string
}
interface IScoreInRound {
  arrayScoreTeams: IScoreCommnad[]
  nextNameTeam: string
}
export const ScoreInRound: FC<IScoreInRound> = ({
  nextNameTeam,
  arrayScoreTeams,
}) => {
  function handleCLick() {
    //здесь должен после нажатия начинаться следующий раунд
  }
  return (
    <div className="score-in-round">
      <div className="score-in-round__commands">
        {arrayScoreTeams.map(command => (
          <div key={command.id} className="score-in-round__command">
            <p className="score-in-round__command_text">{command.nameTeam}</p>
            <p className="score-in-round__command_text">{command.scoreTeam}</p>
          </div>
        ))}
      </div>
      <p className="score-in-round__info">Игра ведётся до 100 очков</p>
      <p className="score-in-round__text">следующими играют</p>
      <p className="score-in-round__next-team">{nextNameTeam}</p>
      <Button
        text="Начать раунд"
        type="button"
        classes="button--score"
        events={{
          onClick: () => handleCLick,
        }}
      />
    </div>
  )
}
