import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      {
        id: nanoid(),
        note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat sollicitudin elit, blandit sagittis ipsum tristique vitae.",
        color: "bg-warning",
      },
      {
        id: nanoid(),
        note: "Praesent vitae ligula pretium, dignissim felis nec, posuere turpis.",
        color: "bg-info",
      },
      {
        id: nanoid(),
        note: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        color: "bg-primary",
      },
    ],
    filter: "",
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
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);

      state.items = filtered;
    },
    updateFilter: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { addNote, deleteNote, updateFilter } = notesSlice.actions;
export default notesSlice.reducer;
