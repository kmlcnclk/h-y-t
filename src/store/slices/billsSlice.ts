import { createSlice } from "@reduxjs/toolkit";

export type BillType = {
  name: string;
  surname: string;
  date: string;
};

export interface BillsValueType {
  bills: BillType[];
}

export interface BillsState {
  value: BillsValueType;
}

const initialState: BillsState = {
  value: {
    bills: [],
  },
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    setBills: (state, action) => {
      const bills = state.value.bills;
      bills.push(action.payload);
      state.value.bills = bills;
    },
  },
});

export const { setBills } = billsSlice.actions;

export default billsSlice.reducer;
