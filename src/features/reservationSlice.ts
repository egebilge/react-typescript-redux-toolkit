import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationsSlices = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      console.log("1");
      state.value.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1); // remove 1 element
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlices.actions;

export default reservationsSlices.reducer;
