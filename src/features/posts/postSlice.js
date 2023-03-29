import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "First Post",
    content: "Hello world",
  },
  {
    id: 1,
    title: "second Post",
    content: "Hello world 2",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
