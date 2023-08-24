import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: null,
    login: null,
    email: null,
    imageUser: null,
    stateChange: false,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        updateUserProfile: (state, { payload }) =>
        ({
            ...state,
            userId: payload.userId,
            login: payload.login,
            email: payload.email,
            imageUser: payload.imageUser,
            token: payload.token,

        }),
        authStateChange: (state, { payload }) => ({
            ...state,
            stateChange: payload.stateChange,
        }),
        authSignOut: () => initialState,
        viewState: (state) => console.log(state),
    },
},
);

export const { updateUserProfile, authStateChange, authSignOut, viewState } = authSlice.actions;
//export const authReducer = authSlice.reducer;

