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
      {
        id: nanoid(),
        note: "This is a test note, lorem ipsum dolor sit amet.",
        color: "bg-info",
      },
      {
        id: nanoid(),
        note: "This is a test note, lorem ipsum dolor sit amet.",
        color: "bg-primary",
      },
    ],
  },
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ note, color }) => {
        return {
          payload: {
            id: nanoid(),
            note,
            color,
          },
        };
      },
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;
