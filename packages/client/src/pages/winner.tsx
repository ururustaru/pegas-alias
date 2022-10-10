import { FC } from 'react'
import {BackLink, Winner} from '../components'

interface IWinnerPage {
  nameWinnerTeam: string
  score: string
}
export const WInnerPage: FC<IWinnerPage> = ({ nameWinnerTeam, score }) => {
  return (
    <>
      <header>
        <BackLink text="Есть победитель!"/>
      </header>
      <main>
        <Winner nameWinnerTeam={nameWinnerTeam} score={score} />
      </main>
    </>
  )
}
