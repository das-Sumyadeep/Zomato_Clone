import { createSlice } from '@reduxjs/toolkit';

const OrderSlice = createSlice({

    name: 'Order',
    initialState: {
        isLoading: false,
        isError: false,
        singleMenu: {},
    },
    reducers: {
        ReqPending: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        ReqSingle: (state, action) => {
            state.isLoading = false;
            state.singleMenu = action.payload;
        },
        ReqRejected: (state) => {
            state.isLoading = false;
            state.isError = true;
        }
    }
})

export const { ReqPending, ReqSingle, ReqRejected } = OrderSlice.actions;

export default OrderSlice.reducer;

