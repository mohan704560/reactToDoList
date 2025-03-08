import { createSlice } from "@reduxjs/toolkit";

// tasklist = {
//   id: null,
//   name: null,
//   completed: false,
//   important: false,
//   date: null,
//   reminder: null,
// }

const initialList = [];

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: initialList,
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload.name,
          completed: false,
          important: false,
          date: action.payload.date,
          reminder: action.payload.reminder,
        },
      ];
    },
    markImportant: (state, action) => {
      state[action.payload.id - 1].important = action.payload.important;
      return state;
    },
    addReminder: (state, action) => {
      state[action.payload.id - 1].reminder = action.payload.reminder;
      return state;
    },
    changeDueDate: (state, action) => {
      state[action.payload.id - 1].date = action.payload.date;
      return state;
    },
    markComplete: (state, action) => {
      state[action.payload - 1].completed = true;
      return state;
    },
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
  },
});

export const {
  addTask,
  markImportant,
  addReminder,
  changeDueDate,
  markComplete,
  deleteTask
} = todolistSlice.actions;
export default todolistSlice.reducer;
