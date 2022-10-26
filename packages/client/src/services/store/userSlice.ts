import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserAPI } from '../http/profile';

export const getUserApi = createAsyncThunk(
  'user/getUserApi',
  async function () {
    const response = await getUserAPI();
    return response;
  }
)

const userSilce = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: ''
  },
  reducers: {
    getUser(state, action) {
      const data = action.payload;
      state.user = data;
    }
  },
  extraReducers: {
    [getUserApi.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getUserApi.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload;
    }
  }
})

export const { getUser } = userSilce.actions;
export default userSilce.reducer;