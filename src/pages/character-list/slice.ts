import { createSlice } from '@reduxjs/toolkit'
import { extraReducers } from './thunks';
import { createModel } from "../../redux/utils";
import {CHARACTER_OPENED, CHARACTERS_ALL} from "./models";


const initialState: any = {
  ...createModel(CHARACTERS_ALL),
  ...createModel(CHARACTER_OPENED),
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {},
  extraReducers,
})

export default characterSlice.reducer;