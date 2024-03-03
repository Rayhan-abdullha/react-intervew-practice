import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./fetures/counter/counterSlice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
 