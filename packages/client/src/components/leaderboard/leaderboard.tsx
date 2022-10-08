import React from 'react';
import { Button, RangeLine } from '../../components';
import './leaderboard.scss';

export function Leaderboard() {
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
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Девочки:</span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">15 игр, 15 побед</span>
            <span className="leaderboard__result-value">9605 слов</span>
          </div>
          <RangeLine percent={99}/>
        </div>
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Мудрые черепахи:</span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">12 игр, 10 побед</span>
            <span className="leaderboard__result-value">215 слов</span>
          </div>
          <RangeLine percent={80}/>
        </div>
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Веселые бизончики:</span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">6 игр, 3 победы</span>
            <span className="leaderboard__result-value">105 слов</span>
          </div>
          <RangeLine percent={50}/>
        </div>
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Настольные монстры:</span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">3 игры, 2 победы</span>
            <span className="leaderboard__result-value">56 слов</span>
          </div>
          <RangeLine percent={66}/>
        </div>
        <div className="leaderboard__result-item">
          <span className="leaderboard__result-title">Киноманы:</span>
          <div className="leaderboard__result-info">
            <span className="leaderboard__result-value">2 игры, 0 побед</span>
            <span className="leaderboard__result-value">2 слова</span>
          </div>
          <RangeLine percent={0}/>
        </div>
      </div>
    </div>
  )
}

