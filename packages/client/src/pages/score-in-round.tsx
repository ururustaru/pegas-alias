import React from 'react'
import { BackLink, ScoreInRound } from '../components'

export const ScoreInRoundPage: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <BackLink text="1 раунд" />
      </header>
      <main>
        <ScoreInRound
          nextNameTeam="Настольные монстры"
          arrayScoreTeams={[
            { id: '1', nameTeam: 'Мудрые черепахи', scoreTeam: 15 },
            { id: '2', nameTeam: 'Настольные монстры', scoreTeam: 0 },
            { id: '3', nameTeam: 'Девочки', scoreTeam: 0 },
          ]}
        />
      </main>
    </>
  )
}
