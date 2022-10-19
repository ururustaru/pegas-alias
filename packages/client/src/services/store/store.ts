import { compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { wsActions } from '../actions/websocket'
import { socketMiddleware } from '../middleware/socket-middleware'
import { rootReducer } from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers =
//   typeof window === 'object' &&
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose
// const enhancer = composeEnhancers(
//   applyMiddleware(socketMiddleware(wsActions), thunk)
// )
// export const store = createStore(rootReducer, enhancer)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(socketMiddleware(wsActions), thunk)))