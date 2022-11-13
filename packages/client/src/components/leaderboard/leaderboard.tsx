import React from 'react'
import { Button, RangeLine } from '../../components'
import './leaderboard.scss'

import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../services/store/leadersSlice'
import { selectLeadersByFilter } from '../../services/store/selectors'
import { Team } from '../../types/leaders'
import { RootState } from '../../services/store/reducer'


export function Leaderboard() {
  const dispatch = useDispatch()
  const leaders: Array<Team> = useSelector(selectLeadersByFilter)
  const activeFilter: string = useSelector((state: RootState) => state.leaders.activeFilter)
  
  const isActiveButton = (filterName: string) => {
    return filterName === activeFilter ? 'button--active' : ''
  } 
  
  const getPercentOfVictories = (victories: number, games: number): number => {
    return (victories / games) * 100
  }
  
  return (
    <div className="leaderboard">
      <div className="leaderboard__sort">
        <span className="leaderboard__sort-title">Сортировать:</span>
        <div className="leaderboard__options">
          <Button
            events={{onClick: () => dispatch(changeFilter("По количеству побед")) }}
            text="По количеству побед"
            classes={'button--light button--small ' + isActiveButton("По количеству побед")} 
          />
          <Button
            events={{onClick: () => dispatch(changeFilter("По количеству игр")) }}
            text="По количеству игр"
            classes={'button--light button--small ' + isActiveButton("По количеству игр")}
          />
          <Button
            events={{onClick: () => dispatch(changeFilter("По количеству отгаданных слов")) }}
            text="По количеству отгаданных слов"
            classes={'button--light button--small ' + isActiveButton("По количеству отгаданных слов")}
          />
        </div>
      </div>
      <div className="leaderboard__results">
        {leaders && leaders.map(team => {
          return (
            <div className="leaderboard__result-item" key={team.name}>
              <span className="leaderboard__result-title">{team.name}:</span>
              <div className="leaderboard__result-info">
                <span className="leaderboard__result-value">
                  {team.games} игр, {team.victories} побед
                </span>
                <span className="leaderboard__result-value">
                  {team.words} слов
                </span>
              </div>
              <RangeLine
                percent={getPercentOfVictories(team.victories, team.games)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
