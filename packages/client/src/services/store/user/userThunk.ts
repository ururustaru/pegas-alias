import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserInfo } from '../../../types/user';
import { changeProfileAPI, getUserAPI } from '../../http/profile';

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