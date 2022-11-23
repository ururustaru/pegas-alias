import { createSlice } from '@reduxjs/toolkit'
import { ActiveTeam, GameSettings} from '../../types/game';
import { deleteByValue } from '../../utils/deleteFromArrayByValue';

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
    
    changeTeamScore(state, action) {
      const foundIndex = state.activeTeams.findIndex((team: ActiveTeam) => team.name === action.payload.name);
      const teams = state.activeTeams.slice();
      const currentTeamScore = teams[foundIndex].score
      teams[foundIndex] = {
        name: action.payload.name,
        score: currentTeamScore + action.payload.score
      };
      state.activeTeams = teams;
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
      if (action.payload >= 10 && action.payload <= 360) {
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
    },

    clearGameSettings(state) {
      state.activeTeams = [];
      state.dictionary = null;
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
  getDictionaryWords,
  changeTeamScore,
  clearGameSettings
} = gameSettingsSlice.actions
export default gameSettingsSlice.reducer
