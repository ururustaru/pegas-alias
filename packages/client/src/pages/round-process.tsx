import React from 'react';

import { Button, TimerLine } from '../components';
import './../components/form/form.scss';

export class RoundProcess extends React.Component {
  state = {
    timer: 43,
    timerLimit: 60  
  }
  intervalIDs:NodeJS.Timeout[] = [];

  componentDidMount() {
    const canvas = document.getElementById("round-canvas") as HTMLCanvasElement;
    const ctx = canvas?.getContext("2d");
    if (ctx) {

      ctx.font = "24px Gilroy";
      ctx.fillStyle = "#3b4f7d"; //$text-dark
      ctx.textAlign = "center";
      ctx.fillText("Бариста", 210, 110);
    }  

    const idInterval = setInterval( ()=> {
      if (this.state.timer > 0 ) {
        this.setState( { timer: this.state.timer - 1, timerLimit: 60 });
      }else{
        clearInterval(idInterval);
        alert('stop!');
      }
    }, 1000);
  }

  render() {
    return <>
    <header>
      <TimerLine count={ this.state.timer } limit={ this.state.timerLimit } />
    </header>
    <main>
      <div className="round--big-text">+13</div>

      <canvas id="round-canvas" width="420" height="251">
      </canvas>

      <div className="round--buttons">
        <Button classes="button--positive" text="Отгадали" />
        <Button classes="button--negative" text="Не отгадали "/>
      </div>
      <Button classes="button--light" text="Не знаю слово" />
    </main>
    </>
  }
}
