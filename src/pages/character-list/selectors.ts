import {RootState} from "../../redux/store";
import {AppState} from "../../redux/utils";
import {createSelector} from "@reduxjs/toolkit";
import {CHARACTER_OPENED, CHARACTERS_ALL} from "./models";

export const selectCharactersState = (state: RootState) : AppState => state.characters;

export const selectCharacters = createSelector(
  selectCharactersState,
  characters => characters[CHARACTERS_ALL],
)

export const selectCharacterOpened = createSelector(
  selectCharactersState,
  characters => characters[CHARACTER_OPENED],
)

