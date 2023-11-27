import Api from '../../Api'
import { RequestPending, RequestFullfilled, RequestRejected } from './ReviewSlice';


// api calls to get review by id
export const getReviews = async (id, dispatch) => {
    dispatch(RequestPending());
    try {
        const res = await Api.get(`/review/all/${id}`, );
        dispatch(RequestFullfilled(res.data.ReviewData));
        // console.log(res.data.ReviewData);
    }
    catch (err) {
        dispatch(RequestRejected());
    }
}

export const updateReview = async (rest_id, user_id, formData, token, dispatch) => {
    dispatch(RequestPending());
    try {
        await Api.post(`/review/new/?rest_id=${rest_id}&user_id=${user_id}`,
        formData,{
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
                // Add other headers if required
            }
        });
        const res = await Api.get(`/review/all/${rest_id}`);
        dispatch(RequestFullfilled(res.data.ReviewData));
    }
    catch (err) {
        dispatch(RequestRejected());
    }
}