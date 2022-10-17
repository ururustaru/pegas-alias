import { FC } from 'react'
import { BackLink, Winner } from '../components'

export const WinnerPage: FC = (): JSX.Element => {
  return (
    <>
      <header>
        <BackLink text="Есть победитель!"/>
      </header>
      <main>
        <Winner nameWinnerTeam="Мудрые черепахи" score="100:91:56" />
      </main>
    </>
  )
}
