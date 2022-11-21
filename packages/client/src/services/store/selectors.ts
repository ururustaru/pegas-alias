import { createSelector } from 'reselect'
import { Team } from '../../types/leaders'

export const selectLeaders = (state: any) => state.leaders.leaders
export const selectActiveFilter = (state: any) => state.leaders.activeFilter

export const selectLeadersByFilter = createSelector(
  [selectLeaders, selectActiveFilter],
  (leaders: Array<Team>, activeFilter: string): Array<Team> => {
    if(activeFilter === "По количеству побед") {
      return Array.from(leaders).sort((a:Team, b: Team) => b.victories - a.victories)
    }
    if(activeFilter === "По количеству игр") {
      return Array.from(leaders).sort((a:Team, b: Team) => b.games - a.games)
    }
    if(activeFilter === "По количеству отгаданных слов") {
      return Array.from(leaders).sort((a:Team, b: Team) => b.words - a.words)
    }    
    return leaders
  } 
)


