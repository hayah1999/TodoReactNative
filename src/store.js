import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/TodoSlice";

const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
});

export default store;