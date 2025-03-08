import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  name: null,
  emailId: null,
  password: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    addUser: (state, action) => ({
      ...state,
      name: action.payload.name,
      emailId: action.payload.emailId,
      password: action.payload.password,
    }),
    removeUser: (state) => ({
      ...state,
      name: null,
      emailId: null,
      password: null,
    }),
  },
});

export const { toggleSideBar } = userSlice.actions;
export default userSlice.reducer;
