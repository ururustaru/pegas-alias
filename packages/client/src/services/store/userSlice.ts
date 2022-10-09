import { createSlice } from '@reduxjs/toolkit'

const userSilce = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    getUser(state, action) {
      const data = action.payload;
      state.user = data;
    }
  }
})

export const { getUser } = userSilce.actions;
export default userSilce.reducer;