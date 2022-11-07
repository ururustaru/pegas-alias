import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  leaders:  [
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
  activeFilter: 'По количеству побед'
}

const leadersSlice = createSlice({
  name: 'leaders',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.activeFilter = action.payload
    }
  },
})

export const { changeFilter } = leadersSlice.actions
export default leadersSlice.reducer
