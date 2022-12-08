import { serverInstance } from './axios'

export const getTopicAPI = (id: string) => {
  return serverInstance
    .get(`/api/topics/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
