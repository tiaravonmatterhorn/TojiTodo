import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios/axios.js";

// Fetch user data
export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (_, { rejectWithValue, getState }) => {
        const state = getState();
        const { token } = state.auth;
        try {
            const response = await api.get("/user/me/", {
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

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: {},
        userDataStatus: "idle",
        userDataError: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetching user data
            .addCase(fetchUserData.pending, (state) => {
                state.userDataStatus = "loading";
                state.userDataError = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userDataStatus = "succeeded";
                state.userData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.userDataStatus = "failed";
                state.userDataError = action.payload;
            });
    },
});

export default userSlice.reducer;
