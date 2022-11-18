import { createSlice } from '@reduxjs/toolkit'
import { GameProcess } from '../../types/game';

const initialState: GameProcess = {
  roundCount: 1,
  activeTeamIndex: 0,
  activeWordIndex: 0,
  roundScore: 0,
  roundWords: null,
  stopwatch: null
}

const gameProcessSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeActiveTeam(state, action) {
      state.activeTeamIndex = action.payload
    },
  },
})

export const {
  changeActiveTeam
} = gameProcessSlice.actions
export default gameProcessSlice.reducer
