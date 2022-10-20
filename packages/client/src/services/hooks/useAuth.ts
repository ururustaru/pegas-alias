import { useStore } from 'react-redux'

const userSelector = (state: any) => state.user.user

export const useAuth = (): boolean => {
  const { getState } = useStore()
  const isAuthenticated = userSelector(getState())
  return !!isAuthenticated
}
