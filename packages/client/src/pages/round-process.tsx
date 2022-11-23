import React, { useEffect, useState, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Timer, CanvasComponent } from '../components'
import './../scss/form/form.scss'
import './../components/round/round.scss'
import { GameProcess, GameSettings } from '../types/game';
import { useAppSelector } from '../services/hooks/useState';
import playStartSound from '../services/browser-api/web-audio-api'
import {
  changeRoundScore,
  changeWord,
  addRoundWord,
} from '../services/store/gameProcessSlice';


export const RoundProcess: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const game: GameSettings = useAppSelector(state => state.gameSettings);
  const process: GameProcess = useAppSelector(state => state.gameProcess);
  const endSound = useRef(null);
  const [timer, setTimer] = useState(game.roundDuration);
  
  function playEndSound(): void {
    if (endSound.current) {
      const sound: HTMLMediaElement = endSound.current;
      if (sound) sound.play();
    }
  }
  
  function onWordGuess(e: Event, score: number): void {
    e.preventDefault();
    if (game.dictionary && game.dictionary.words) {
      const word = game.dictionary.words[process.activeWordIndex];
      dispatch(addRoundWord({
        word: word,
        wordScore: score
      }));
    }
    dispatch(changeRoundScore(process.roundScore + score));
    dispatch(changeWord());
  }

  useEffect(() => {
    setTimeout(() => {
      if (timer === game.roundDuration) {
        playStartSound()
      }
      if (timer === 5) {
        playEndSound();
      }
      if (timer > 0) {
        setTimer(timer - 1)
      } else {
        navigate('/round-end');
      }
    }, 1000);
  }, [timer])

  return (
    <>
      <header>
        <Timer count={ timer } limit={ game.roundDuration }/>
      </header>
      <main>
        <div className="round">
          <div className="round__result">{ process.roundScore }</div>
          <div className="round__stages">
            {game.dictionary && game.dictionary.words &&
              <CanvasComponent
                key={ game.dictionary.words[process.activeWordIndex] }
                width={ 450 }
                height={ 400 }
                word={ game.dictionary.words[process.activeWordIndex] }
              />
            }
          </div>

          <div className="round__buttons">
            <Button
              classes="button--success"
              text="Отгадали"
              type="button"
              events={{
                onClick: (e) => onWordGuess(e, 1)
              }}
            /> 
            <Button
              classes="button--alert"
              text="Не отгадали"
              type="button"
              events={{
                onClick: (e) => onWordGuess(e, -1)
              }}
            /> 
            <Button
              classes="button--light"
              text="Не знаю слово"
              type="button"
              events={{
                onClick: (e) => onWordGuess(e, 0)
              }}
            />
          </div>

          <audio className="round__sound"
            hidden
            src='/round-end.mp3'
            ref={endSound}
          />
        </div>
      </main>
    </>
  )
}
