import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios/axios.js";

// Fetch todos
export const fetchToDos = createAsyncThunk(
    "user/fetchToDos",
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        try {
            const response = await api.get("/user/me/todos/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

// Fetch todo by id
export const fetchToDoById = createAsyncThunk(
    "user/fetchToDoById",
    async (id, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        try {
            const response = await api.get(`/user/me/todo/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

// Add new todo
export const addNewToDo = createAsyncThunk(
    "user/addNewToDo",
    async (newToDo, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        try {
            const response = await api.post("/user/me/todos/", newToDo, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

// Update todo
export const updateToDo = createAsyncThunk(
    "user/updateToDo",
    async (updatedToDo, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        const { id, ...data } = updatedToDo;
        try {
            const response = await api.patch(`/user/me/todo/${id}/`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("response", response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

// Delete todo
export const deleteToDo = createAsyncThunk(
    "user/deleteToDo",
    async (id, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        try {
            const response = await api.delete(`/user/me/todo/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("response", response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        toDos: [],
        toDosStatus: "idle",
        toDosError: null,
        toDo: null,
        toDoStatus: "idle",
        toDoError: null,
    },
    reducers: {
        removeTodo: (state, action) => {
            state.toDos = state.toDos.filter(
                (todo) => todo.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            // Fetching ToDos
            .addCase(fetchToDos.pending, (state) => {
                state.toDosStatus = "loading";
                state.toDosError = null;
            })
            .addCase(fetchToDos.fulfilled, (state, action) => {
                state.toDosStatus = "succeeded";
                state.toDos = action.payload;
            })
            .addCase(fetchToDos.rejected, (state, action) => {
                state.toDosStatus = "failed";
                state.toDosError = action.payload;
            })
            // Fetching ToDo by Id
            .addCase(fetchToDoById.pending, (state) => {
                state.toDoStatus = "loading";
                state.toDoError = null;
            })
            .addCase(fetchToDoById.fulfilled, (state, action) => {
                state.toDoStatus = "succeeded";
                state.toDo = action.payload;
            })
            .addCase(fetchToDoById.rejected, (state, action) => {
                state.toDoStatus = "failed";
                state.toDoError = action.payload;
            })

            // Adding ToDo
            .addCase(addNewToDo.pending, (state) => {
                state.toDosStatus = "loading";
                state.toDosError = null;
            })
            .addCase(addNewToDo.fulfilled, (state, action) => {
                state.toDosStatus = "succeeded";
                state.toDos.push(action.payload);
            })
            .addCase(addNewToDo.rejected, (state, action) => {
                state.toDosStatus = "failed";
                state.toDosError = action.payload;
            })

            // Updating ToDo
            .addCase(updateToDo.fulfilled, (state, action) => {
                // search toDos array from state to find index of to do that matches id of updated to do
                const index = state.toDos.findIndex(
                    (todo) => todo.id === action.payload.id
                );
                // updating matching item from toDos
                if (index !== -1) {
                    state.toDos[index] = action.payload;
                }
                // updating toDo item that matches payload id
                if (state.toDo && state.toDo.id === action.payload.id) {
                    state.toDo = action.payload;
                }
            });
    },
});

export default userSlice.reducer;
