import React from 'react';
import './leaderboard.scss';
import {Button} from '../button/button';

export function Leaderboard() {
  return (
    <div className="leaderboard">
      <div className="leaderboard__sort">
        <span className="leaderboard__sort-title">Сортировать:</span>
        <div className="leaderboard__options">
          <Button text="По количеству побед" classes="button--active"/>
          <Button text="По количеству игр"/>
          <Button text="По количеству отгаданных слов"/> 
          <select className="leaderboard__select">
            <option value="victories">По количеству побед</option>
            <option value="count">По количеству игр</option>
            <option value="words">По количеству отгаданных слов</option>
          </select>
        </div>
      </div>
      <div className="leaderboard__results">
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Девочки: </span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">15 игр, 15 побед</span>
            <span className="leaderboard__result-value">9605 слов</span>
          </div>
        </div>
      </div>
    </div>
  )
}

