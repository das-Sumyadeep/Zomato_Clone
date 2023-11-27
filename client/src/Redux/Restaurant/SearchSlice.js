import { createSlice } from '@reduxjs/toolkit';

const SearchSlider = createSlice({

    name: 'Search',
    initialState: {
        isLoading: false,
        isError: false,
        error: {},
        searchResponse: [],

    },
    reducers: {
        RequestPend: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        RequestDone: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.searchResponse = action.payload;
        },
        RequestReject: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        }
    }
})

export const { RequestPend, RequestDone, RequestReject } = SearchSlider.actions;

export default SearchSlider.reducer;

