import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
