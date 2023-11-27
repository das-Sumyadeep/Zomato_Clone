import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: 'Cart',
    initialState: {
        Loading: false,
        Error: false,
        isStatus: "",
        Price: 0,
        Cart: []
    },
    reducers: {
        cartPending: (state) => {
            state.Loading = true;
        },
        cartFulfilled: (state, action) => {
            state.Loading = false;
            state.isStatus = action.payload;
        },
        response: (state, action) => {
            state.Loading = false;
            // Find the index of the item with the matching id
            const index = state.Cart.findIndex(item => item._id === action.payload._id);
            
            if (index !== -1) {
                
                // If found, update the item
                state.Cart[index] = action.payload;
            } else {
                
                // If not found, add the new item to the array
                state.Cart = [...state.Cart, action.payload];
            }
            
            state.Price = state.Cart[0]?.reduce((total, item) => total + item.foodDetails.price * item.quantity, 0).toFixed(0);

        },
        cartReject: (state) => {
            state.Loading = false;
            state.Error = true;
        },

    }
})

export const { cartPending, cartFulfilled, cartReject, response } = CartSlice.actions;

export default CartSlice.reducer;

