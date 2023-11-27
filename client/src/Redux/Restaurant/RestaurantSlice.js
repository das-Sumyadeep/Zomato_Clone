import { createSlice } from '@reduxjs/toolkit';

const RestaurantSlice = createSlice({

    name: 'Restaurant',
    initialState: {
        isLoading: false,
        isError: false,
        Error:{},
        allRestaurants: [],
        singleRestaurants: {},
    },
    reducers: {
        RequestPending: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        RequestAllRest: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.allRestaurants = action.payload;
        },
        RequestSingleRest: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.singleRestaurants = action.payload;
        },
        RequestRejected: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.allRestaurants = [];
            state.Error = action.payload;
        }
    }
})

export const { RequestPending, RequestAllRest, RequestSingleRest, RequestRejected } = RestaurantSlice.actions;

export default RestaurantSlice.reducer;

