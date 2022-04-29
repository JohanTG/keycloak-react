import {PayloadAction, PrepareAction} from "@reduxjs/toolkit";

export interface AppStateItem {
  loading: boolean,
  loaded: boolean,
  error: any,
  payload: any,
}

export type AppState = Record<string, AppStateItem>

export const createModel = (key: string): AppState => ({
  [key]: {
    loading: false,
    loaded: false,
    error: null,
    payload: null,
  },
})

export const createExtraReducer = (thunk: any, key: string) => {
  return {
    [thunk.pending]: (state: AppState, action: PayloadAction<any>) => {
      state[key].loading = true
      state[key].loaded = false
      state[key].error = null
      state[key].payload = null
    },
    [thunk.rejected]: (state: AppState, action: any/*PrepareAction<any>*/) => {
      state[key].loading = false
      state[key].loaded = false
      state[key].error = action.payload || action.error?.error || action.error?.message || `Error in ${thunk.rejected}`
      state[key].payload = null
    },
    [thunk.fulfilled]: (state: AppState, action: PayloadAction<any>) => {
      state[key].loading = false
      state[key].loaded = true
      state[key].error = null
      state[key].payload = action.payload
    },
  }
}