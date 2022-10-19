import { combineReducers } from 'redux'
import { loginReducer } from '../redux/login/reducer/login'
import { userReducer } from './user'
import { wsReducer } from './websocket'

export const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  socket: wsReducer,
})
