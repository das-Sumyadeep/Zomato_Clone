import { createSlice } from "@reduxjs/toolkit";

const LocSlice = createSlice({

    name: 'Location',
    initialState: {
        isLoading: false,
        isError: false,
        locity: ""
    },
    reducers: {
        pending: (state) => {
            state.isLoading = true;
        },
        fulfilled: (state, action) => {
            state.isLoading = false;
            state.locity = action.payload;
        },
        reject: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        updateLoc: (state, action) => {
            state.locity = action.payload;
        }
    }
})

export const {pending, fulfilled, reject, updateLoc} = LocSlice.actions;

export default LocSlice.reducer;

