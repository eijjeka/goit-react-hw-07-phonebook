import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    filter: "",
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filter } = contactsSlice.actions;

//Selectors

export const getFilter = (state) => state.contacts.filter;
