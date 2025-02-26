import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.js";
import userReducer from "./userSlice.js";
import todoReducer from "./todoSlice.js";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        todo: todoReducer,
    },
});
export default store;
