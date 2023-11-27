import { configureStore } from '@reduxjs/toolkit';
import RestaurantReducer from '../Restaurant/RestaurantSlice';
import OrderReducer from '../Order/OrderSlice';
import ReviewReducer from '../Review/ReviewSlice';
import SearchReducer from '../Restaurant/SearchSlice';
import LocationReducer from '../Location/LocSlice'
import CartReducer from '../Cart/CartSlice';
import UserReducer from '../User/UserSlice';

export const GlobalStore = configureStore(
    {
        reducer: {
            restaurant: RestaurantReducer,
            order: OrderReducer,
            review: ReviewReducer,
            search: SearchReducer,
            location: LocationReducer,
            cart: CartReducer,
            user: UserReducer
        }
    }
)