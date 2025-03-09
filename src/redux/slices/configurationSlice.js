import { createSlice } from "@reduxjs/toolkit";

// initialise the initial configuration
const initialConfiguration = {
  sideBar: false,
  editItem: null,
  grid: false,
  darkMode: false,
};

// Add reducer methods to the slice

export const configurationSlice = createSlice({
  name: "configuration",
  initialState: initialConfiguration,
  reducers: {
    toggleSideBar: (state) => ({ ...state, sideBar: !state.sideBar }),
    addItem: (state, action) => ({ ...state, editItem: action.payload }),
    removeItem: (state) => ({ ...state, editItem: null }),
    toggleGrid: (state) => ({ ...state, grid: !state.grid }),
    toggleDarkMode: (state) => ({ ...state, darkMode: !state.darkMode }),
  },
});

export const {
  toggleSideBar,
  addItem,
  removeItem,
  toggleGrid,
  toggleDarkMode,
} = configurationSlice.actions;
export default configurationSlice.reducer;
