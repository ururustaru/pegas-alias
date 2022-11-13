import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import leadersReducer from './leadersSlice';
import gameReducer from './gameSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    leaders: leadersReducer,
    game: gameReducer
  }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

