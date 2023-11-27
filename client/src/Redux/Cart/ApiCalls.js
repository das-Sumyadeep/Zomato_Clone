import Api from '../../Api';
import { cartPending, cartFulfilled, cartReject, response } from './CartSlice';

export const getCart = async (id, rest_id, token, dispatch) => {
    dispatch(cartPending());
    try {

        const res = await Api.get(`order/${id}/${rest_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(response(res.data.order));
    } catch (err) {
        dispatch(cartReject());
    }
};

export const getQuantity = async (id, rest_id, cart_id, type, token, dispatch) => {
    dispatch(cartPending());
    try {

        await Api.put(`order/quantity/${cart_id}/${type}`);


        const res = await Api.get(`order/${id}/${rest_id}` , {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(response(res.data.order));
    } catch (err) {
        dispatch(cartReject());
    }
};

export const deleteItem = async (id, rest_id, cart_id, token, dispatch) => {
    dispatch(cartPending());
    try {

        await Api.delete(`order/delete/${cart_id}`);

        const res = await Api.get(`order/${id}/${rest_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(response(res.data.order));
    } catch (err) {
        dispatch(cartReject());
    }
};


export const deleteAll = async (id, rest_id, token, dispatch) => {
    dispatch(cartPending());
    try {
        await Api.delete(`order/deleteOrders/?user_id=${id}&rest_id=${rest_id}`);

        const res = await Api.get(`order/${id}/${rest_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(response(res.data.order));
    } catch (err) {
        dispatch(cartReject());
    }
};

export const InCart = async (id, rest_id, dispatch, orderDetails, token) => {
    dispatch(cartPending());
    try {

        const res = await Api.post(`order/new/${id}`, orderDetails, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(cartFulfilled(res.data.order));

        const data = await Api.get(`order/${id}/${rest_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(response(data.data.order));
    } catch (err) {
        dispatch(cartReject());
    }
};
