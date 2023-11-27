import Api from '../../Api';
import { pending, fulfilled, reject } from './LocSlice';

// getting location of passed coordinates using geolocation api
export const getLoca = async (lat, lon, dispatch) => {
    dispatch(pending());
    try {
        const res = await Api.get(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        dispatch(fulfilled(res.data.address.county));
        // console.log(res.data.address);
    }
    catch (err) {
        dispatch(reject());
    }
}
