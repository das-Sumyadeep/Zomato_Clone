import { createSlice } from '@reduxjs/toolkit'

const ReviewSlice = createSlice({

    name: 'Review',
    initialState: {
        isLoading: false,
        isError: false,
        allReview: [],
    },
    reducers: {
        RequestPending: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        RequestFullfilled: (state, action) => {
            state.isLoading = false;
            state.allReview = action.payload
        },
        RequestRejected: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export const { RequestPending, RequestFullfilled, RequestRejected } = ReviewSlice.actions;

export default ReviewSlice.reducer;