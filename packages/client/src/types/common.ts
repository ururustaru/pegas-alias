import { TUserActions } from '../services/actions'
import { ThunkAction } from 'redux-thunk'
import { Action, ActionCreator, Dispatch } from 'redux'
import { TWSActions } from '../services/actions/websocket'
import { store } from '../services/store/store'

export type TEvents = Record<string, (e: Event) => void>

export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type Range<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

export type TAppActions = TUserActions | TWSActions
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>
export type AppDispatch = Dispatch<TAppActions>
