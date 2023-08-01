import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { URLS } from '../../../constants/urls';
import { ActiveChatsProps } from './chatSlice.types';
import axios from 'axios';
import { IItem } from '../../../interface/page';

const initialState: ActiveChatsProps  = {
  activeChats: [],
  isLoading: false,
  error: undefined
}

export const fetchActiveChats = createAsyncThunk(
  'fetch/ActiveChats',
  async (_, thunkAPI) => {
    try {
      const axiosConfig = {
        headers: {
          version: '0.0'
    }
  }
    const response = await axios.get(`https://api.lenzaos.com/chat.get?offset=0&limit=20`, axiosConfig)
      if (!response.data) {
        throw new Error(response.statusText)
      }
      return response.data.response
        
      } catch (e) {
          console.error(e)
          return thunkAPI.rejectWithValue('Loading error')
      }
    }
)

const activeChats = createSlice({
  name: 'activeChats',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchActiveChats.fulfilled.type]: (state, action: PayloadAction<IItem[]>) => {
      state.isLoading = false
      state.error = undefined
      state.activeChats = action.payload
    },
    [fetchActiveChats.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchActiveChats.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default activeChats.reducer