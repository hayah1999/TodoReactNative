import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storedTodos = await AsyncStorage.getItem('todos');


const initialState = {
    todos: storedTodos ? JSON.parse(storedTodos) : [],
    message: '',
    isLoading: false,
    isError: false,
};


export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (payload, thunkAPI) => {
        const todos = thunkAPI.getState().todos.todos;
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
        const newTodo = { ...payload, id: newId };
        const updatedTodos = [...todos, newTodo];
        await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
    }
);

export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async (id, thunkAPI) => {
        const todos = thunkAPI.getState().todos.todos;
        const updatedTodos = todos.filter(todo => todo.id !== id);
        await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
        return updatedTodos;
    }
);

export const markTodoAsDone = createAsyncThunk('todos/markTodoAsDone', async (id, thunkAPI) => {

    const todos = thunkAPI.getState().todos.todos;
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        const newStatus = todos[index].status === "Done" ? "Active" : "Done";
        const updatedTodo = { ...todos[index], status: newStatus };
        const updatedTodos = [
            ...todos.slice(0, index),
            updatedTodo,
            ...todos.slice(index + 1),
        ];
        await AsyncStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos;
    }

});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers:
    {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addTodo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(addTodo.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(removeTodo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(removeTodo.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            })
            .addCase(markTodoAsDone.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(markTodoAsDone.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isLoading = false;
            })
            .addCase(markTodoAsDone.rejected, (state) => {
                state.isError = true;
                state.isLoading = false;
            });
    },
});

export const { reset } = todosSlice.actions;
export default todosSlice.reducer;


// removeTodo: async (state, action) => {
//     const todoToDelete = state.todos.find(todo => todo.id === action.payload);
//     if (!todoToDelete) return;
//     state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     await AsyncStorage.clear('todos');
//     await AsyncStorage.setItem('todos', JSON.stringify(state.todos));
// },
// markTodoAsDone: (state, action) => {
//     const index = state.todos.findIndex(todo => todo.id === action.payload);
//     if (index !== -1) {
//         const newStatus = state.todos[index].status === 'Done' ? 'Active' : 'Done';
//         state.todos[index] = { ...state.todos[index], status: newStatus };
//     }
// },