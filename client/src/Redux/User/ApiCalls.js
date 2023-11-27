
import Api from '../../Api';
import { ReqPending, ReqSingle, ReqRejected, status, setToken, setNewAddress } from './UserSlice';

export const getUser = async (token, dispatch) => {
    dispatch(ReqPending());
    try {
        const res = await Api.get('/auth/login/success', {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(ReqSingle(res.data.user));
        dispatch(status(res.data.message));
        // console.log(res.data.user);
    }
    catch (err) {
        dispatch(ReqRejected());
    }
}


export const signupUser = async (formData, dispatch) => {
    dispatch(ReqPending());
    try {
        const res = await Api.post('/auth/signup', formData);
        dispatch(status(res.data.message));
    }
    catch (err) {
        dispatch(ReqRejected());
    }
}


export const signinUser = async (formData, dispatch) => {
    dispatch(ReqPending());
    try {
        const res = await Api.post('/auth/signin', formData);
        dispatch(status(res.data.message));
        dispatch(ReqSingle(res.data.user));
        dispatch(setToken(res.data.token));
        // console.log(res.data);
    }
    catch (err) {
        dispatch(ReqRejected());
    }
}


export const updateAddress = async (userId, newAddress, token, dispatch) => {
    dispatch(ReqPending());
    try {
        console.log(userId);
        const res = await Api.put(`/user/update/${userId}`, newAddress, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        dispatch(setNewAddress(res.data.user.address));
        // console.log(res.data.user.address);
    }
    catch (err) {
        dispatch(ReqRejected());
    }
}