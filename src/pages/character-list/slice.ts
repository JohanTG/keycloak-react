import { createSlice } from '@reduxjs/toolkit'
import {extraReducers} from './thunks';
import {RootState} from "../../common/store";
import {createModel, AppState} from "../../common/utils";
import {CHARACTERS_ALL} from "./models";


const initialState: any = {
  ...createModel(CHARACTERS_ALL),
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers,
/*
  extraReducers: (builder) => {
    builder.addCase(thunks.getAll.fulfilled, (state, action) => {
      console.log('characterSlice.getAll: action=', action);
      return [...action.payload.results];
    })
    builder.addCase(thunks.getById.fulfilled, (state, action) => {
      return [...action.payload];
    })
  },
 */
})

export const selectCharacters = (state: RootState) : AppState => state.characters;

export default characterSlice.reducer;