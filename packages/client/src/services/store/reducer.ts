import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import leadersReducer from './leaders/leadersSlice';
import gameSettingsReducer from './game/gameSettingsSlice';
import gameProcessReducer from './game/gameProcessSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    leaders: leadersReducer,
    gameSettings: gameSettingsReducer,
    gameProcess: gameProcessReducer
  }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

