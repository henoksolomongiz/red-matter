import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';



export interface PolygonState {
  events: number[][];
  gate: number[][];
  result: boolean[];
}
export interface PolygonInputState {
  events: number[][];
  gate: number[][];
  dimensionX: number;
  dimensionY: number
}
const initialState: PolygonState = {
  result: [],
  events: [
    [198619, 182327, 96947, 196635],
    [190812, 198648, 90738, 190065],
    [185989, 195751, 98451, 186084],
    [183427, 187377, 81139, 194941],
    [195132, 193197, 71631, 186256],
    [190417, 198065, 77642, 182257],
    [195056, 207627, 59446, 91838],
    [183397, 151944, 111610, 111637],
    [207692, 191928, 108065, 112038],
    [190221, 192832, 115585, 104890],
    [193719, 200159, 95359, 83465],
    [205421, 178546, 57777, 118342],
    [190282, 135992, 105312, 83259],
    [122317, 180897, 116984, 42136],
    [186234, 147115, 21118, 52353],
    [215352, 191865, 35746, 104579],
    [127227, 190625, 58608, 126068],
    [154717, 200857, 66317, 67820],
    [87551, 88180, 99411, 116278],
    [70234, 118126, 66264, 79860],
    [83333, 106316, 55046, 136022],
    [111130, 101929, 29539, 42758],
    [59423, 70765, 82492, 59081],
    [66899, 111391, 119097, 50261],
    [84508, 81086, 131670, 121690],
    [106041, 68309, 29146, 39835],
    [76734, 103062, 27210, 85928],
    [105879, 56701, 129143, 136780],
    [86379, 91427, 137619, 58351],
    [89941, 51729, 51592, 107206]
  ],
  gate: [
    [
      200000,
      100000
    ],
    [
      230000,
      180000
    ],
    [
      200000,
      200000
    ],
    [
      200000,
      230000
    ],
    [
      110000,
      220000
    ],
    [
      100000,
      180000
    ],
  ]

};
export function inside(x: number, y: number, vs: number[][]) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];
      
      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  
  return inside;
};
export function PointinPoly(events: number[][],
  gate: number[][], dimensionX: number, dimensionY: number) {
  let result: boolean[] = [];
  for (var j = 0; j < events.length; j++) {

    let x: number = events[j][dimensionX];
    let y: number = events[j][dimensionY];


     var intersect = inside(x,y,gate);
      result.push(intersect);
      console.log(intersect);
   
  }
  return result;
}

export const polygonSlice = createSlice({
  name: 'polygon',
  initialState,
  reducers: {

    checkDimension: (state, action: PayloadAction<PolygonInputState>) => {

      state.result = PointinPoly(action.payload.events, action.payload.gate, action.payload.dimensionX, action.payload.dimensionY);
    },

  }
});

export const { checkDimension } = polygonSlice.actions;
export const getResult = (state: RootState) => state.polygon.result;
export const getEvent = (state: RootState) => state.polygon.events;
export const getGate = (state: RootState) => state.polygon.gate;

export default polygonSlice.reducer;
