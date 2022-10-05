import React from 'react';
import {BackLink, Leaderboard} from '../components';

export const Leaders: React.FC = (): JSX.Element => {
  return (
    <>
      <header>
        <BackLink text="Таблица лидеров"/>
      </header>
      <main>
        <Leaderboard/>
      </main>
    </>
  )
}
