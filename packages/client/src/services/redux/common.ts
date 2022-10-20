import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook, } from 'react-redux';

import { TLoginActions } from './login/type/type';
import { TWSActions } from './socket/action/websocket';
import { store } from './store';
import { TUserActions } from './user/type/type';

export type TAppActions = TUserActions | TWSActions | TLoginActions;


export type RootState = ReturnType<typeof store.getState>;

type ThunkActionTemp = ThunkAction<void, Action, RootState, TAppActions>;

export type AppThunk = ActionCreator<ThunkActionTemp>;

export type AppDispatch = Dispatch<TAppActions>;



// Теперь этот хук «знает» структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

