import { useSelector } from 'react-redux'
import { RootState } from '../store/reducer'

export const useAuth = (): boolean => {
  const isAuthenticated = useSelector((state: RootState) => state.user.user)
  return !!isAuthenticated
}
