import { apiInstance } from './axios'
import { FilterState } from '../store/leaders/type'

export const getLeadersAPI = (filter: FilterState) => {
  return apiInstance
    .post('/leaderboard/all', filter)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export const postAddLeaderAPI = (data: unknown) => {
  return apiInstance
    .post('/leaderboard', data)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
