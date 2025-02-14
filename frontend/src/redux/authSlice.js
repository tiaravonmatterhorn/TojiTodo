import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios/axios.js";

export const userLogin = createAsyncThunk(
    "auth/userLogin",
    async (credentials, { rejectWithValue }) => {
        console.log("authSlice.js", credentials);
        try {
            const response = await api.post("/auth/token/", {
                // @ts-ignore
                email: credentials.email,
                // @ts-ignore
                password: credentials.password,
            });

            const accessToken = response.data.access;
            localStorage.setItem("access", accessToken);

            // dispatch `getUser` after storing the token
            // const user = await dispatch(getUser()).unwrap();
            return { token: accessToken };
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.detail ||
                    "User not found. Please sign up."
            );
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("access") || null,
        status: "idle",
        error: null,
    },
    reducers: {
        userLogout(state) {
            localStorage.removeItem("access");
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userLogin.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.token = action.payload.token;
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export default authSlice.reducer;
