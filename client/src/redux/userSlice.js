import { createSlice } from "@reduxjs/toolkit";

// create a userSlice using createSlice with login logout and loginsucess and loginfail reducers
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        error: null,
        loading: false
    },
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        loginFail: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state, action) => {
            state.user = null;
            state.loading = false;
        }
    },
});
// export the userSlice methods
export const { loginStart, logout, loginFail, loginSuccess } = userSlice.actions;
// export the userSlice reducer
export default userSlice.reducer;
