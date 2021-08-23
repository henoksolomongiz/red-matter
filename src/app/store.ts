import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import panelReducer from '../features/panel/panelSlice';
import polygonReducer from '../features/polygon/polygonSlice';
export const store = configureStore({
  reducer: {
    panel: panelReducer,
    polygon: polygonReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
