import React from 'react'
import { Intro } from '../components'
import { ButtonsNavigation } from '../components/buttons-navigation/buttons-navigation'
import playStartSound from '../services/browser-api/web-audio-api'

export const Main: React.FC = (): JSX.Element => {
  playStartSound()
  
  return (
    <main>
      <Intro />
      <ButtonsNavigation />
    </main>
  )
}
