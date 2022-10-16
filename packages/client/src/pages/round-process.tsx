import React from 'react';
import {Button, Timer} from '../components';
import { CanvasComponent } from '../components/canvas/canvas';
import './../scss/form/form.scss';
import './../components/round/round.scss';

export class RoundProcess extends React.Component {
  state = {
    timer: 58,
    timerLimit: 60  
  }
  intervalIDs:NodeJS.Timeout[] = [];

  componentDidMount() {
    const idInterval = setInterval( ()=> {
      if (this.state.timer > 0 ) {
        this.setState( { timer: this.state.timer - 1, timerLimit: 60 });
      } else {
        clearInterval(idInterval);
        console.log('stop!');
      }
    }, 1000);
  }

  render() {
    return <>
      <header>
        <Timer count={ this.state.timer } limit={ this.state.timerLimit } />
      </header>
      <main>
        <div className="round">
          <div className="round__result">+13</div>
          <div className="round__stages">
            <CanvasComponent />
          </div>

          <div className="round__buttons">
            <Button classes="button--success" text="Отгадали" />
            <Button classes="button--alert" text="Не отгадали"/>
            <Button classes="button--light" text="Не знаю слово" />
          </div>
        </div>
      </main>
    </>
  }
}
