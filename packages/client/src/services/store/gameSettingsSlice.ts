import { createSlice } from '@reduxjs/toolkit'
import { Team } from '../../types/leaders';
import { GameSettings } from '../../types/game';

const deleteByValue = (givenArray: Team[], prop: string, value: string | number | boolean): Team[] => {
  return givenArray.filter((item: any) => {
    return item[prop] !== value;
  });
}

// TODO: В playedTeams подставить игравшие команды из реальной статистики
const initialState: GameSettings = {
  activeTeams: [],
  playedTeams: [
    {
      name: 'Девочки',
      games: 15,
      victories: 15,
      words: 9605,
    },
    {
      name: 'Мудрые черепахи',
      games: 120,
      victories: 10,
      words: 1,
    },
    {
      name: 'Веселые бизончики',
      games: 6,
      victories: 5,
      words: 15,
    },
    {
      name: 'Настольные монстры',
      games: 3000,
      victories: 200,
      words: 56,
    },
    {
      name: 'Киноманы',
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

const gameSettingsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addTeam(state, action) {
      state.activeTeams.push({
        name: action.payload,
        score: 0
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
      state.dictionary = action.payload;
    },

    getDictionaryWords(state, action) {
      if (state.dictionary) {
        state.dictionary.words = action.payload;
      }
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
  toggleLastWordForAll,
  getDictionaryWords
} = gameSettingsSlice.actions
export default gameSettingsSlice.reducer
