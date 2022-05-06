import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import characterReducer from './characters/slice'

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
