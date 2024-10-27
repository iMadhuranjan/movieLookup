import { createSlice } from "@reduxjs/toolkit";
 

  const favSlice = createSlice({

    name: "fav",

    initialState: {
      item: [ ],
    },

    reducers: {
      addMovie: (state, actions) => {
        state.item.push(actions.payload);
      },

      removeMovie: (state, action) => {
        state.item.pop();
      },
      removeFavMovie: (state, action) => {
        state = [];
      },
    },
  });


export const {addMovie, removeFavMovie, removeMovie}=favSlice.actions;
export default favSlice.reducer;
