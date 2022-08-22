import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(),
        note: "This is a test note, lorem ipsum dolor sit amet.",
        color: "bg-warning",
      },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
