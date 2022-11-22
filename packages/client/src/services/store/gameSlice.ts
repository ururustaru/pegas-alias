import { createSlice } from '@reduxjs/toolkit'
import { Team } from '../../types/leaders';

const deleteByValue = (givenArray: Team[], prop: string, value: string | number | boolean): Team[] => {
  return givenArray.filter((item: any) => {
    return item[prop] !== value;
  });
}

// TODO: В playedTeams подставить игравшие команды из реальной статистики
const initialState = {
  activeTeams: [],
  playedTeams: [
    {
      teamName: 'Девочки',
      games: 15,
      victories: 15,
      words: 9605,
    },
    {
      teamName: 'Мудрые черепахи',
      games: 120,
      victories: 10,
      words: 1,
    },
    {
      teamName: 'Веселые бизончики',
      games: 6,
      victories: 5,
      words: 15,
    },
    {
      teamName: 'Настольные монстры',
      games: 3000,
      victories: 200,
      words: 56,
    },
    {
      teamName: 'Киноманы',
      games: 2,
      victories: 0,
      words: 2,
    },
  ],
  roundDuration: 60,
  wordsToWin: 50,
  lastWordForAll: true,
  dictionary: null
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addTeam(state, action) {
      state.activeTeams.push({
        name: action.payload
      });
    },

    removeTeam(state, action) {
      state.activeTeams = deleteByValue(state.activeTeams, 'name', action.payload);
    },

    addTeamToPlayed(state, action) {
      state.playedTeams.push(action.payload);
    },

    removeTeamFromPlayed(state, action) {
      state.playedTeams = deleteByValue(state.playedTeams, 'name', action.payload);
    },

    changeDictionary(state, action) {
      state.dictionary = action.payload
    },

    changeRoundDuration(state, action) {
      if (action.payload >= 30 && action.payload <= 360) {
        state.roundDuration = action.payload
      }
    },

    changeWordsToWin(state, action) {
      if (action.payload >= 10 && action.payload <= 250) {
        state.wordsToWin = action.payload
      }
    },

    toggleLastWordForAll(state, action) {
      state.lastWordForAll = action.payload
    }
  },
})

export const {
  addTeam,
  removeTeam,
  addTeamToPlayed,
  removeTeamFromPlayed,
  changeDictionary,
  changeRoundDuration,
  changeWordsToWin,
  toggleLastWordForAll
} = gameSlice.actions
export default gameSlice.reducer
