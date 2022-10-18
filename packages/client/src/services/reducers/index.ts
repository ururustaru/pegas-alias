import { combineReducers } from 'redux'
import { userReducer } from './user'
import { wsReducer } from './websocket'

export const rootReducer = combineReducers({
  user: userReducer,
  socket: wsReducer,
})
