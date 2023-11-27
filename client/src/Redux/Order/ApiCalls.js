import Api from '../../Api';
import { ReqPending, ReqSingle, ReqRejected } from './OrderSlice';

// api calls to get order menu by id
export const getOrders = async (id, dispatch) => {
    dispatch(ReqPending());
    try {
        const res = await Api.get(`/menu/${id}`);
        dispatch(ReqSingle(res.data.MenuData[0]));
        // console.log(res.data.MenuData[0]);
    }
    catch (err) {
        dispatch(ReqRejected());
    }
}