import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({

    name: 'User',
    initialState: {
        isLoading: false,
        isError: false,
        token: null,
        Status: "",
        Address: [],
        formData: {
            email: "",
            password: ""
        },
        User: {}
    },
    reducers: {
        ReqPending: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        ReqSingle: (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.User = action.payload;
        },
        ReqRejected: (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        status: (state, action) => {
            state.Status = action.payload;
        },
        setFormData: (state, action) => {
            state.formData = action.payload;
        },
        setNewAddress: (state, action) => {
            state.Address = action.payload;
        }
    }
})

export const { ReqPending, ReqSingle, ReqRejected, setToken, status, setFormData, setNewAddress } = UserSlice.actions;

export default UserSlice.reducer;

