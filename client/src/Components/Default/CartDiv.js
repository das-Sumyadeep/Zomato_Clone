import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { deleteAll } from '../../Redux/Cart/ApiCalls';

const CartDiv = () => {

    const params = useParams();
    const dispatch = useDispatch();
    const { Loading, Cart, Price } = useSelector((state) => state.cart);
    const { User, token } = useSelector((state) => state.user);

    const handleDeleteAll = () => {

        deleteAll(User._id, params.id, token, dispatch);

    }

    return (
        <>
            <div className='fixed bottom-3 left-0 w-full h-16 bg-red-500 rounded-lg text-white'>
                <div className='flex items-center justify-between xs:py-3 xs:px-4 sm:p-3 xl:py-2 xl:px-8 lg:py-2 lg:px-6 xm:py-2 xm:px-3 md:p-3'>
                    <p className='xl:text-2xl lg:text-2xl xm:text-xl md:text-xl xs:text-md font-medium'>{Cart[0].length} item | <span>Sub Total : ₹ {Price}</span></p>
                    <div className='flex items-center gap-4'>
                        <button className='font-semibold xs:text-md xm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-black rounded-lg bg-red-200 px-3 py-2 hover:bg-white hover:text-red-500' onClick={handleDeleteAll} >Clear All</button>
                        <NavLink to={`/${params.type}/${params.id}/cart`}>
                            <button className='font-semibold xs:text-md xm:text-xl md:text-xl lg:text-2xl xl:text-2xl text-black rounded-lg bg-red-200 px-3 py-2 hover:bg-white hover:text-red-500' 
                            disabled={Loading}
                            >Continue</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CartDiv