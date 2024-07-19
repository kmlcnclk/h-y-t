import { createSlice } from "@reduxjs/toolkit";

export interface AuthValueType {
  isLogged: boolean;
}

export interface AuthState {
  value: AuthValueType;
}

const initialState: AuthState = {
  value: {
    isLogged: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.value.isLogged = action.payload;
    },
  },
});

export const { setIsLogged } = authSlice.actions;

export default authSlice.reducer;
