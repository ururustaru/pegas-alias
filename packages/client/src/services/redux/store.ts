import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { wsActions } from './socket/action/websocket'
import { socketMiddleware } from './socket/middleware/socket-middleware'
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux'
import { userReducer } from './user/reducer/user'
import { loginReducer } from './login/reducer/login'
import { wsReducer } from './socket/reducer/websocket'


const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  socket: wsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(socketMiddleware(wsActions), thunk)))