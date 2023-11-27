import Api from '../../Api';
import { RequestPending, RequestAllRest, RequestSingleRest, RequestRejected } from './RestaurantSlice';
import { RequestPend, RequestDone, RequestReject } from './SearchSlice';

// api call to get all restaurants
export const getRestaurants = async (query, dispatch) => {
    dispatch(RequestPending());
    try {
        let Loquery = query.toLowerCase();
        const res = await Api.get(`/restaurant/all/?city=${Loquery}`);
        dispatch(RequestAllRest(res.data.RestData));
        // console.log(res.data.RestData);
    }
    catch (err) {
        dispatch(RequestRejected());
    }
}


// api calls to get restaurants by id
export const getRestDetails = async (id, dispatch) => {
    dispatch(RequestPending());
    try {
        const res = await Api.get(`/restaurant/${id}`);
        dispatch(RequestSingleRest(res.data.RestData[0]));
        // console.log(res.data.RestData[0]);
    }
    catch (err) {
        dispatch(RequestRejected());
    }
}


// api calls to get restaurants by search
export const getSearch = async (city, search, dispatch) => {
    dispatch(RequestPend());
    try {
        let Locity = city.toLowerCase(); 
        const res = await Api.get(`restaurant/search/${search}/${Locity}`);
        dispatch(RequestDone(res.data.restaurants));
        console.log(res.data.restaurants);
    }
    catch (err) {
        dispatch(RequestReject(err.response.data));
        // console.log(err.response.data)
    }
}




