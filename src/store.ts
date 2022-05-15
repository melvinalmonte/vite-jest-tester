import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./features/counter/counterSlice";
import loginReducer from "./features/login/loginSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  middleware: [thunk],
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
