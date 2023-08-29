import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment: "",
};

export const commentSlice = createSlice({
    name: "comment",
    initialState: initialState,
    reducers: {
        newComment: (state, payload) => {
            state.comment = payload;
        },

    },
});

export const { newComment } = commentSlice.actions;
export const commentReducer = commentSlice.reducer;



// export const postSlice = createSlice({
//     name: "post",
//     initialState,
//     reducers: {
//         addComment: (state, { payload }) => ({
//             comment: payload,
//         }),
//     },
// });

// export const { addComment } = postSlice.actions;

// export const postReducer = postSlice.reducer;