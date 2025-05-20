import { createSlice } from "@reduxjs/toolkit";

const NoteBookSlice = createSlice({
  name: "NoteBook",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    deleteNote: (state, action) => {
      return state.filter((Note) => Note.id !== action.payload);
    },
  },
});

export default NoteBookSlice.reducer;

export const { addNote, deleteNote } = NoteBookSlice.actions;
