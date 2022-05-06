import { createAsyncThunk } from "@reduxjs/toolkit";
import CharacterService from '../../services/character.service';
import {createExtraReducer} from "../utils";
import {CHARACTER_OPENED, CHARACTERS_ALL} from "./models";


export const getAll = createAsyncThunk(
  "characters/getAll",
  async (...args) => {
    try{
      const res = await CharacterService.getAll();
      return res.data;
    } catch (e: any) {
      const thunkApi = args[args.length-2];
      return thunkApi?.rejectWithValue(e.response?.data?.error || e.error || e.message)
    }
  }
);

export const getById = createAsyncThunk(
  "characters/getById",
  async (id: number) => {
    const res = await CharacterService.get(id);
    return res.data;
  }
);

export const extraReducers = {
  ...createExtraReducer(getAll, CHARACTERS_ALL),
  ...createExtraReducer(getById, CHARACTER_OPENED),
}