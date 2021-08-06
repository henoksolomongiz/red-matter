import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store'; 

export interface RectangleState {
  color: string; 
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface CanvasState {
  Rectangle: RectangleState[]; 
}

const initialState: CanvasState = {
  Rectangle: [], 
  
};
 

export const panelSlice = createSlice({
  name: 'panel',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      
    // Use the PayloadAction type to declare the contents of `action.payload`
    addRectangle: (state, action: PayloadAction<RectangleState>) => {
      state.Rectangle.push(action.payload);
    },
  },
   
});

export const { addRectangle} = panelSlice.actions; 
export const getRectangle = (state: RootState) => state.panel.Rectangle;
 

export default panelSlice.reducer;
