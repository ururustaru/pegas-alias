import React, { useEffect } from 'react'
import { Button } from '../../components/'
import './round-board.scss'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GameProcess, GameSettings, RoundWord } from '../../types/game';
import { useAppSelector } from '../../services/hooks/useState';
import { wordsDeclention } from '../../utils';

import checkIcon from './../../assets/images/check.svg'
import questionIcon from './../../assets/images/question.svg';
import crossIcon from './../../assets/images/cross-red.svg';
import deleteIcon from './../../assets/images/trash-gray.svg';
import {
  changeRoundWordScore,
  changeActiveTeam,
  clearTeamProcess,
  changeEndGameScore,
  setWinner,
  clearGameProcess,
  setNextRound, 
  changeWord
} from '../../services/store/gameProcessSlice';
import { changeTeamScore, clearGameSettings } from '../../services/store/gameSettingsSlice';

export function RoundBoard(): JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const game: GameSettings = useAppSelector(state => state.gameSettings);
  const process: GameProcess = useAppSelector(state => state.gameProcess);
  const wordList: JSX.Element[] | null | undefined = []
  const activeTeam = game.activeTeams[process.activeTeamIndex];

  useEffect(() => {
    dispatch(changeWord());
  }, [])

  // Возвращает css-класс состояния очков [http://joxi.ru/KAxQy8wCw1ongr]
  const getWordClass = (score: number): string => {
    let result = 'round-board__word'
    if (score === -1) {
      result += ' round-board__word--minus'
    } else if (score === 0) {
      result += ' round-board__word--zero'
    } else if (score === 1) {
      result += ' round-board__word--plus'
    }
    return result
  }

  function changeWordScore(e: Event, item: RoundWord, score: 1 | 0 | -1): void {
    e.preventDefault();
    dispatch(changeRoundWordScore({
      word: item.word,
      wordScore: score
    }));
  }
  
  function onFinishRound(e: Event): void {
    e.preventDefault();
    dispatch(changeTeamScore({
      name: activeTeam.name,
      score: process.roundScore
    }))
    dispatch(clearTeamProcess());
    
    // Если есть не игравшая команда в раунде, продолжаем раунд
    if (game.activeTeams[process.activeTeamIndex + 1]) {
      dispatch(changeActiveTeam(process.activeTeamIndex + 1));
      navigate('/score-in-round');
    } else {
      const maxScoreTeam = game.activeTeams.reduce(function(prev, current) {
        return (current.score > prev.score) ? current : prev
      });
      console.log(maxScoreTeam);

      // Конец раунда. Если победа достигнута, показать победителя, записать результаты команд в игравшие
      if (maxScoreTeam.score >= game.wordsToWin) {
        let endGameScore = '';
        game.activeTeams.forEach(team => {
          endGameScore += team.score + ' : '
        })
        
        dispatch(setWinner(maxScoreTeam.name));
        dispatch(changeEndGameScore(endGameScore.slice(0, -2)));
        dispatch(clearGameProcess());
        dispatch(clearGameSettings());
        setTimeout(() => {
          navigate('/winner');
        })
      }
      // Иначе сменить раунд и начать с первой команды
      else {
        dispatch(setNextRound());
        dispatch(changeActiveTeam(0));
        navigate('/score-in-round');
      }
    }
  }

  process.roundWords.forEach(item => {
    wordList.push(
      <div className={getWordClass(item.wordScore)} key={item.word}>
        <div className="round-board__word-value">{item.word}</div>
        <div className="round-board__word-score">{item.wordScore}</div>
        <div className="round-board__word-actions">
          <Button
            classes="button--icon button--white round-board__check-button"
            icon={<img src={checkIcon} alt="+1" />}
            events={{
              onClick: (e) => changeWordScore(e, item, 1)
            }}
          />
          <Button
            classes="button--icon button--white round-board__delete-button"
            icon={<img src={crossIcon} alt="-1" />}
            events={{
              onClick: (e) => changeWordScore(e, item, -1)
            }}
          />
          <Button
            classes="button--icon button--white round-board__trash-button"
            icon={<img src={deleteIcon} alt="0" />}
            events={{
              onClick: (e) => changeWordScore(e, item, 0)
            }}
          />
          <Button
            classes="button--icon button--white round-board__question-button"
            icon={<img src={questionIcon} alt="Узнать значение" />}
          />
        </div>
      </div>
    )
  })

  return (
    <form className="round-board">
      <div className="round-board__header">
        <h2 className="round-board__title">{activeTeam.name}</h2>
        <span className="round-board__subtitle">{process.roundCount} раунд</span>
      </div>
      <div className="round-board__words">{wordList}</div>
      <p className="round-board__summary">
        {activeTeam.name} заработали {process.roundScore} {wordsDeclention(process.roundScore, ['очко', 'очка', 'очков'])}
      </p>
      <Button 
        text="Далее" 
        classes="round-board__next"
        events={{
          onClick: onFinishRound
        }}
      />
    </form>
  )
}
