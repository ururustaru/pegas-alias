import React from 'react';
import { Button, RangeLine } from '../../components';
import './leaderboard.scss';

// TODO: [https://pegas-alias.atlassian.net/browse/PEGAS-36] Избавиться от замоканных данных
import { LEADERBOARD } from '../../mocks/leaderboard';

export function Leaderboard() {
  function getPercentOfVictories(victories: number, games: number): number {
    return victories / games * 100;
  }
  
  return (
    <div className="leaderboard">
      <div className="leaderboard__sort">
        <span className="leaderboard__sort-title">Сортировать:</span>
        <div className="leaderboard__options">
          <Button text="По количеству побед" classes="button--active button--light button--small"/>
          <Button text="По количеству игр" classes="button--light button--small"/>
          <Button text="По количеству отгаданных слов" classes="button--light button--small"/> 
        </div>
      </div>
      <div className="leaderboard__results">
        {LEADERBOARD.map(team => {
          return (
            <div className="leaderboard__result-item" key={team.name}>
              <span className="leaderboard__result-title">{team.name}:</span>
              <div className="leaderboard__result-info">
                <span className="leaderboard__result-value">{team.games} игр, {team.victories} побед</span>
                <span className="leaderboard__result-value">{team.words} слов</span>
              </div>
              <RangeLine percent={getPercentOfVictories(team.victories, team.games)}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

