import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserInfo } from '../../types/user';
import { changeProfileAPI, getUserAPI } from '../http/profile';

export const getUserApi = createAsyncThunk(
  'user/getUserApi',
  async function () {
    const response = await getUserAPI();
    return response;
  }
)

export const changeProfile = createAsyncThunk(
  'user/changeProfile',
  async function (data: UserInfo) {
    const response = await changeProfileAPI(data);
    return response;
  }
)

type UserState = {
  user: UserInfo;
  status: string;
}

const initialState: UserState = {
  user: {
    id: 0,
    email: '',
    login: '',
    first_name: '',
    second_name: '',
    display_name: '',
    phone: '',
    avatar: ''
  },
  status: ''
}

const userSilce = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<UserInfo>) {
      const data = action.payload;
      state.user = data;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUserApi.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.user = action.payload;
      })
      .addCase(changeProfile.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  },
})

export const { getUser } = userSilce.actions;
export default userSilce.reducer;