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
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      state = state.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const { postAdded, deletePost } = postSlice.actions;
export default postSlice.reducer;
