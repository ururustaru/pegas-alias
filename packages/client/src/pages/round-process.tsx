import React, { useEffect, useState } from 'react'
import { Button, Timer } from '../components'
import { CanvasComponent } from '../components/canvas/canvas'
import './../scss/form/form.scss'
import './../components/round/round.scss'
import { FullscreenBtn } from '../components/fullscreen-btn/fullscreen-btn'

export const RoundProcess: React.FC = (): JSX.Element => {

  const state = {
    timerLimit: 60,
    words: ['гипопотам', 'носорог', 'единорог'],
    animation: false,
  }

  const [timer, setTimer] = useState(state.timerLimit);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    const idInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      clearInterval(idInterval)
    }, 1000)
  }, [timer]);

  useEffect(() => {},[counter]);
  useEffect(() => {},[score]);

  const handler = {
    onClick: (e: Event) => {
      e.preventDefault()
      if (state.words.length > counter + 1) {
        const element = e.target as HTMLElement;
        if (element.classList.contains("button--alert")) {
          setScore(score-1);
        }
        if (element.classList.contains("button--success")) { 
          setScore(score+1);
        }
        if (element.classList.contains("button--light")) { 
          alert('функционал подсказки или следующее слово');
        }else{
          setCounter(counter+1);
        }
      } else {
        console.log('load new words')
      }
    },
  }

    return (
      <>
        <header key={'t'+timer}>
          <FullscreenBtn />
          <Timer count={timer} limit={state.timerLimit} />
        </header>
        <main key={'w'+counter}>
          <div className="round">
            <div className="round__result">{score}</div>
            <div className="round__stages">
              <CanvasComponent
                key={'c'+counter}
                width={450}
                height={400}
                word={state.words[counter]}
              />
            </div>

            <div className="round__buttons">
              <Button
                classes="button--success"
                text="Отгадали"
                type="button"
                events={handler}
              />
              <Button
                classes="button--alert"
                text="Не отгадали"
                type="button"
                events={handler}
              />
              <Button
                classes="button--light"
                text="Не знаю слово"
                type="button"
                events={handler}
              />
            </div>
          </div>
        </main>
      </>
    )
  }
