import { FC } from 'react'
import { BackLink, ScoreInRound } from '../components'

interface IScoreCommnad {
  nameTeam: string
  scoreTeam: number
  id: string
}
interface IScoreInRoundPage {
  arrayScoreTeams: IScoreCommnad[]
  nextNameTeam: string
  numberRound: number
}
export const ScoreInRoundPage: FC<IScoreInRoundPage> = ({
  numberRound,
  nextNameTeam,
  arrayScoreTeams,
}) => {
  return (
    <>
      <header>
        <BackLink text={`${numberRound} раунд`} />
      </header>
      <main>
        <ScoreInRound
          nextNameTeam={nextNameTeam}
          arrayScoreTeams={arrayScoreTeams}
        />
      </main>
    </>
  )
}
