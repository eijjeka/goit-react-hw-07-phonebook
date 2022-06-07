import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "components/Redux/contactsApi";
import { contactsSlice } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
