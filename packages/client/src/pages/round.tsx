import React from 'react';

import { Button, BackLink } from '../components';
import './../scss/form/form.scss';
import './../components/round/round.scss';

export const Round: React.FC = (): JSX.Element => {
  const currPlayer = 1;
  const scoreLimit = 100;
  const placeholders = { "teams":[
    {"name":"команда 1", "score": 20},
    {"name":"команда 2", "score": 0},
    {"name":"команда 3", "score": 0}
  ]};

  const teamList: JSX.Element[] | null | undefined = [];
  placeholders.teams.forEach(team => {
    teamList.push( <Button key={team.name} classes="button--light button--bold-text button--with-cancel" disabled text={team.name} icon={<span className='button--icon-22'>{team.score}</span>} />);
  }); 

  return (
    <>
    <header>
      <BackLink text="1 раунд"/>
    </header>
    <main>
      <form className="form">
        <div className="form__fields">
          {teamList}
          <div className='flat-field'>Игра ведется до <span>{scoreLimit}</span> очков</div>
          <div className='round--text'>Следующими играют</div>
          <div className='round--team'>{ placeholders.teams[currPlayer].name }</div>
          <Button classes="button" text="Начать раунд" />
        </div>
      </form>
    </main>
    </>
  )
}
