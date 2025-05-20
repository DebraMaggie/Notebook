import { configureStore } from "@reduxjs/toolkit";
import NoteBookReducer from "../Feature/NoteBookSlice";

const store = configureStore({
  reducer: {
    NoteBook: NoteBookReducer,
  },
});

export default store;
