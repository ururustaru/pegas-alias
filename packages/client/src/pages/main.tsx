import React from 'react';
import {Intro} from '../components/intro/intro';
import {ButtonsNavigation} from '../components/buttons-navigation/buttons-navigation';

export const Main: React.FC = (): JSX.Element => {
  return (
    <main>
      <Intro />
      <ButtonsNavigation />
    </main>
  )
}
