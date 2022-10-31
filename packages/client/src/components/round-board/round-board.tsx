import React from 'react'
import { Button } from '../../components/'

import './round-board.scss'

export function RoundBoard(): JSX.Element {
  const currPlayer = 0

  const currRound = 1

  // TODO: [https://pegas-alias.atlassian.net/browse/PEGAS-36] Избавиться от замоканных данных
  const teams = {
    teams: [
      { name: 'Настольные монстры', score: 20 },
      { name: 'Девочки', score: 0 },
      { name: 'Мудрые черепахи', score: 0 },
    ],
  }

  const placeholderDictionary = {
    words: [
      { value: 'Бариста', score: 1 },
      { value: 'Флора', score: 1 },
      { value: 'Дождь', score: 0 },
      { value: 'Бульдозер', score: -1 },
      { value: 'Луноход', score: 1 },
      { value: 'Электрогазопарикмахер', score: -1 },
    ],
  }

  const wordList: JSX.Element[] | null | undefined = []

  // Возвращает css-класс состояния очков [http://joxi.ru/KAxQy8wCw1ongr]
  const getWordScoreClass = (score: number): string => {
    let result = 'round-board__word-score'
    if (score === -1) {
      result += ' round-board__word-score--minus'
    } else if (score === 0) {
      result += ' round-board__word-score--zero'
    } else if (score === 1) {
      result += ' round-board__word-score--plus'
    }
    return result
  }

  placeholderDictionary.words.forEach(word => {
    wordList.push(
      <div className="round-board__word">
        <div className="round-board__word-value">{word.value}</div>
        <div className={getWordScoreClass(word.score)}>{word.score}</div>
        <div className="round-board__word-actions">
          <Button
            classes="button--icon button--white button--active"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.75 4.5L6.75 13.5L2.25 9"
                  stroke="#008A50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Button
            classes="button--icon button--white"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.75 3.75L9 9M9 9L14.25 14.25M9 9L14.25 3.75M9 9L3.75 14.25"
                  stroke="#E83A3A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Button
            classes="button--icon button--white"
            icon={
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.5 6.25L8.275 11.5M5.725 11.5L5.5 6.25M2.5 3.25L3.12554 12.633C3.19558 13.6836 4.06818 14.5 5.12111 14.5H8.87889C9.93182 14.5 10.8044 13.6836 10.8745 12.633L11.5 3.25M2.5 3.25H4.75M2.5 3.25H1M11.5 3.25H13M11.5 3.25H9.25M9.25 3.25V3C9.25 1.89543 8.35457 1 7.25 1H6.75C5.64543 1 4.75 1.89543 4.75 3V3.25M9.25 3.25H4.75"
                  stroke="#8F99BF"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Button
            classes="button--icon button--white round-board__question-button"
            icon={
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 0C6.01664 0 4.5666 0.439867 3.33323 1.26398C2.09986 2.08809 1.13856 3.25943 0.570907 4.62987C0.00324963 6.00032 -0.145275 7.50832 0.144114 8.96318C0.433503 10.418 1.14781 11.7544 2.1967 12.8033C3.2456 13.8522 4.58197 14.5665 6.03683 14.8559C7.49168 15.1453 8.99968 14.9968 10.3701 14.4291C11.7406 13.8614 12.9119 12.9001 13.736 11.6668C14.5601 10.4334 15 8.98336 15 7.5C15 6.51509 14.806 5.53982 14.4291 4.62987C14.0522 3.71993 13.4997 2.89314 12.8033 2.1967C12.1069 1.50026 11.2801 0.947814 10.3701 0.570904C9.46019 0.193993 8.48492 0 7.5 0ZM7.5 13.5C6.31332 13.5 5.15328 13.1481 4.16658 12.4888C3.17989 11.8295 2.41085 10.8925 1.95673 9.7961C1.5026 8.69974 1.38378 7.49334 1.61529 6.32946C1.8468 5.16557 2.41825 4.09647 3.25736 3.25736C4.09648 2.41824 5.16558 1.8468 6.32946 1.61529C7.49335 1.38378 8.69975 1.5026 9.7961 1.95672C10.8925 2.41085 11.8295 3.17988 12.4888 4.16658C13.1481 5.15327 13.5 6.31331 13.5 7.5C13.5 9.0913 12.8679 10.6174 11.7426 11.7426C10.6174 12.8679 9.0913 13.5 7.5 13.5Z"
                  fill="#3B4F7D"
                />
                <path
                  d="M7.5 3.00005C6.80381 3.00005 6.13613 3.27661 5.64384 3.7689C5.15156 4.26118 4.875 4.92886 4.875 5.62505C4.875 5.82396 4.95402 6.01473 5.09467 6.15538C5.23532 6.29603 5.42609 6.37505 5.625 6.37505C5.82391 6.37505 6.01468 6.29603 6.15533 6.15538C6.29598 6.01473 6.375 5.82396 6.375 5.62505C6.375 5.40255 6.44098 5.18504 6.5646 5.00003C6.68821 4.81503 6.86391 4.67083 7.06948 4.58569C7.27505 4.50054 7.50125 4.47826 7.71948 4.52167C7.93771 4.56508 8.13816 4.67222 8.2955 4.82956C8.45283 4.98689 8.55998 5.18734 8.60338 5.40557C8.64679 5.6238 8.62451 5.85 8.53936 6.05557C8.45422 6.26114 8.31002 6.43684 8.12502 6.56045C7.94001 6.68407 7.7225 6.75005 7.5 6.75005C7.30109 6.75005 7.11032 6.82907 6.96967 6.96972C6.82902 7.11037 6.75 7.30114 6.75 7.50005V9.00005C6.75 9.19896 6.82902 9.38973 6.96967 9.53038C7.11032 9.67103 7.30109 9.75005 7.5 9.75005C7.69891 9.75005 7.88968 9.67103 8.03033 9.53038C8.17098 9.38973 8.25 9.19896 8.25 9.00005V8.13005C8.85608 7.95305 9.37775 7.56295 9.71887 7.03163C10.06 6.50031 10.1976 5.8636 10.1062 5.23885C10.0149 4.6141 9.70079 4.04342 9.22184 3.63199C8.7429 3.22057 8.13138 2.99613 7.5 3.00005Z"
                  fill="#3B4F7D"
                />
                <path
                  d="M7.5 12C7.91421 12 8.25 11.6642 8.25 11.25C8.25 10.8358 7.91421 10.5 7.5 10.5C7.08579 10.5 6.75 10.8358 6.75 11.25C6.75 11.6642 7.08579 12 7.5 12Z"
                  fill="#3B4F7D"
                />
              </svg>
            }
          />
        </div>
      </div>
    )
  })

  return (
    <form className="round-board">
      <div className="round-board__header">
        <h2 className="round-board__title">{teams.teams[currPlayer].name}</h2>
        <span className="round-board__subtitle">{currRound} раунд</span>
      </div>
      <div className="round-board__words">{wordList}</div>
      <p className="round-board__summary">
        Настольные монстры заработали 3 очка
      </p>
      <Button text="Далее" classes="round-board__next" />
    </form>
  )
}
