import React, { ReactNode } from 'react';

import { Button, BackLink } from '../components';
import './../components/form/form.scss';
import './../components/round/round.scss';

export const RoundEnd: React.FC = (): JSX.Element => {
  const currPlayer = 1;
  const currRound = 1;

  const teams = { "teams":[
    {"name":"команда 1", "score": 20},
    {"name":"команда 2", "score": 0},
    {"name":"команда 3", "score": 0}
  ]};
  const placeholderDictionary = { "words":[
    {"word":"Бариста", "status": 1, "desciption" : "text/link"},
    {"word":"Флора", "status": 1, "desciption" : "text/link"},
    {"word":"Дождь", "status": 0, "desciption" : "text/link"},
    {"word":"Бульдозер", "status": -1, "desciption" : "text/link"},
    {"word":"Луноход", "status": 1, "desciption" : "text/link"},
    {"word":"Электрогазопаркмахер", "status": -1, "desciption" : "text/link"}
  ]};
  const wordList: JSX.Element[] | null | undefined = [];
  const ActionBtnBlock:ReactNode = <div className='button--actions-btn'><div className='button--ok'></div><div className='button--cancel'></div><div className='button--delete'></div></div>;

  placeholderDictionary.words.forEach(word => {
   wordList.push( <Button key={word.word} classes="button--light button--bold-text button--light-disable" disabled text={word.word} icon={<span><div className='button--question'>?</div>{ActionBtnBlock}</span>} />);
  }); 


  return (
    <>
    <header>
      <BackLink text="1 раунд"/>
    </header>
    <main>
      <form className="form">
        <div className="form__fields">
          <div>
            <div className='back-link__text'>{ teams.teams[currPlayer].name }</div>
            <div className='flat-field flat-field--noborder'>{ currRound } рануд</div>
          </div>
            {wordList}
          <div>
            <div className='flat-field flat-field--noborder'>
              <p><span>{ teams.teams[currPlayer].name }</span></p>
            </div>
            <div className='flat-field flat-field--noborder'>заработали <span>{ teams.teams[currPlayer].score }</span></div>
          </div>
          <Button classes="button" text="Далее" />
          </div>
      </form>
    </main>
    </>
  )
}
