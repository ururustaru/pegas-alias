import { createSelector } from 'reselect'
import { Leader } from '../../types/leader-types'

export const selectLeaders = (state: any) => state.leaders.leaders
export const selectActiveFilter = (state: any) => state.leaders.activeFilter

export const selectLeadersByFilter = createSelector(
  [selectLeaders, selectActiveFilter],
  (leaders: Array<Leader>, activeFilter: string): Array<Leader> => {
    if(activeFilter === "По количеству побед") {
      return Array.from(leaders).sort((a:Leader, b: Leader) => a.victories - b.victories)
    }
    if(activeFilter === "По количеству игр") {
      return Array.from(leaders).sort((a:Leader, b: Leader) => a.games - b.games)
    }
    if(activeFilter === "По количеству отгаданных слов") {
      return Array.from(leaders).sort((a:Leader, b: Leader) => a.words - b.words)
    }    
    return leaders
  } 
)


