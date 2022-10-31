import React from 'react'
import { Button, Timer } from '../components'
import { CanvasComponent } from '../components/canvas/canvas'
import './../scss/form/form.scss'
import './../components/round/round.scss'
import { FullscreenBtn } from '../components/fullscreen-btn/fullscreen-btn'

export class RoundProcess extends React.Component {
  state = {
    timerLimit: 60,
    timer: 60,
    counter: 0,
    words: ['гипопотам', 'носорог', 'единорог'],
    animation: false,
  }

  componentDidMount() {
    if (this.state.timer < this.state.timerLimit) {
      return
    }

    this.state.timer--

    const idInterval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState({ timer: this.state.timer - 1, timerLimit: 60 })
      } else {
        clearInterval(idInterval)
        this.state.counter++
      }
    }, 1000)
  }

  handler = {
    onClick: (event: Event) => {
      event.preventDefault()
      if (this.state.words.length > this.state.counter + 1) {
        this.state.counter++
      } else {
        console.log('load new words')
      }
    },
  }

  render() {
    return (
      <>
        <header key={this.state.timer}>
          <FullscreenBtn />
          <Timer count={this.state.timer} limit={this.state.timerLimit} />
        </header>
        <main key={this.state.counter}>
          <div className="round">
            <div className="round__result">{this.state.counter}</div>
            <div className="round__stages">
              <CanvasComponent
                key={this.state.counter}
                width={450}
                height={400}
                word={this.state.words[this.state.counter]}
              />
            </div>

            <div className="round__buttons">
              <Button
                classes="button--success"
                text="Отгадали"
                type="button"
                events={this.handler}
              />
              <Button
                classes="button--alert"
                text="Не отгадали"
                type="button"
                events={this.handler}
              />
              <Button
                classes="button--light"
                text="Не знаю слово"
                type="button"
                events={this.handler}
              />
            </div>
          </div>
        </main>
      </>
    )
  }
}
