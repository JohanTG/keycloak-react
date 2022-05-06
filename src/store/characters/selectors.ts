import {RootState} from "../store";
import {AppState} from "../utils";
import {createSelector} from "@reduxjs/toolkit";
import {CHARACTER_OPENED, CHARACTERS_ALL} from "./models";

const selectCharactersState = (state: RootState) : AppState => state.characters;

export const selectCharacters = createSelector(
  selectCharactersState,
  characters => characters[CHARACTERS_ALL],
)

export const selectCharacterOpened = createSelector(
  selectCharactersState,
  characters => characters[CHARACTER_OPENED],
)
