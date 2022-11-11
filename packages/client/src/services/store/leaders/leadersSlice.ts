import { createSlice } from '@reduxjs/toolkit'
import { getLeadersApi } from './leadersThunk'

const initialState = {
  leaders: [],
  status: ''
}

const leadersSlice = createSlice({
  name: 'leaders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeadersApi.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getLeadersApi.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.leaders = action.payload.map((item: any) => item.data)
      })
  }
})

export default leadersSlice.reducer
