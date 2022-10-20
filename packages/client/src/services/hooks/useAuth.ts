import { useSelector } from 'react-redux'

export const useAuth = (): boolean => {
  const isAuthenticated = useSelector((state: any) => state.user.user)
  return !!isAuthenticated
}
