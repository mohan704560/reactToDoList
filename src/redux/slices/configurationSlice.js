import { createSlice } from "@reduxjs/toolkit";

const initialConfiguration = {
  sideBar: false,
  editItem: null,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: initialConfiguration,
  reducers: {
    toggleSideBar: (state) => ({ ...state, sideBar: !state.sideBar }),
    addItem: (state, action) => ({ ...state, editItem: action.payload }),
    removeItem: (state) => ({ ...state, editItem: null }),
  },
});

export const { toggleSideBar, addItem, removeItem } = configurationSlice.actions;
export default configurationSlice.reducer;
