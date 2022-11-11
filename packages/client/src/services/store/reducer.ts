import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import leadersReducer from './leaders/leadersSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        leaders: leadersReducer
    }
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

