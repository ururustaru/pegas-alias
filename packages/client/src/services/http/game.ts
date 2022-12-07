import { serverInstance } from './axios';

export const getPublicData = async (url: string) => {
  return await serverInstance
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(error)
    })
}
