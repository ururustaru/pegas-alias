import { instanse } from './axios'
import { FilterState } from '../store/leaders/type'

export const getLeadersAPI = (filter: FilterState) => {
  return instanse
    .post('/leaderboard/all', filter)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export const postAddLeaderAPI = (data: any) => {
  return instanse
    .post('/leaderboard', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
