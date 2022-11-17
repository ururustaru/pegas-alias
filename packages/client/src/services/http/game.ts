import { serverInstance } from './axios'

export const getWords = async (url: string) => {
  return await serverInstance
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}
