import React, { useEffect, useState, useRef } from 'react'
import { Button, Timer, CanvasComponent } from '../components'
import './../scss/form/form.scss'
import './../components/round/round.scss'
import { GameSettings } from '../types/game';
import { useAppSelector } from '../services/hooks/useState';
import playStartSound from '../services/browser-api/web-audio-api'


export const RoundProcess: React.FC = () => {
  const game: GameSettings = useAppSelector(state => state.gameSettings);
  const endSound = useRef(null);
  const [timer, setTimer] = useState(game.roundDuration);
  const state = {
    timerLimit: 60,
    timer: 60,
    counter: 0,
    words: [ 'гипопотам', 'носорог', 'единорог' ],
    animation: false,
  }
  
  function playEndSound() {
    if (endSound.current) {
      const sound: HTMLMediaElement = endSound.current;
      if (sound) sound.play();
    }
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
      }
    }, 1000);
  }, [timer])

  return (
    <>
      <header>
        <Timer count={ timer } limit={ game.roundDuration }/>
      </header>
      <main key={ state.counter }>
        <div className="round">
          <div className="round__result">{ state.counter }</div>
          <div className="round__stages">
            <CanvasComponent
              key={ state.counter }
              width={ 450 }
              height={ 400 }
              word={ state.words[state.counter] }
            />
          </div>

          <div className="round__buttons">
            <Button
              classes="button--success"
              text="Отгадали"
              type="button"
            /> 
            <Button
              classes="button--alert"
              text="Не отгадали"
              type="button"
            /> 
            <Button
              classes="button--light"
              text="Не знаю слово"
              type="button"
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
