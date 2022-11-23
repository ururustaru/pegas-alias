import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserInfo } from '../../../types/user';
import { changeProfileAPI, getUserAPI } from '../../http/profile';

export const getUserApi = createAsyncThunk(
  'user/getUserApi',
  async function () {
    return await getUserAPI();
  }
)

export const changeProfile = createAsyncThunk(
  'user/changeProfile',
  async function (data: UserInfo) {
    return await changeProfileAPI(data);
  }
)
