import { FC } from 'react'
import { Winner } from '../components'

interface IWinnerPage {
  nameWinnerTeam: string
  score: string
}
export const WInnerPage: FC<IWinnerPage> = ({ nameWinnerTeam, score }) => {
  return (
    <main>
      <Winner nameWinnerTeam={nameWinnerTeam} score={score} />
    </main>
  )
}
