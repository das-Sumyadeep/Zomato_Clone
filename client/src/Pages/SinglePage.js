import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Components/Default/Footer'
import CartDiv from '../Components/Default/CartDiv';
import RestHeader from '../Components/Default/RestHeader'
// import { getLoca } from '../Redux/Location/ApiCalls';
import { getCart } from '../Redux/Cart/ApiCalls';
import { cartFulfilled } from '../Redux/Cart/CartSlice';
import { getRestDetails } from '../Redux/Restaurant/ApiCalls';
import { status, setToken } from '../Redux/User/UserSlice';
import { getUser } from '../Redux/User/ApiCalls';
import Cookies from 'universal-cookie';

const SinglePage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const cookies = new Cookies();
  const NewToken = cookies.get('jwt');

  const { token, User } = useSelector(state => state.user);

  useEffect(() => {
    if (NewToken) {
      // Dispatch the setToken action
      dispatch(setToken(NewToken));
    }
    getUser(token, dispatch);
  }, [NewToken, dispatch, token]);


  useEffect(() => {
    getRestDetails(id, dispatch);
    getCart(User._id, id, token, dispatch);
  }, [User._id, id, token, dispatch]);

  const { Cart, isStatus } = useSelector(state => state.cart);
  const { Status } = useSelector(state => state.user);


  useEffect(() => {
    setTimeout(() => {
      dispatch(cartFulfilled(""));
      dispatch(status(""));
    }, 3000);
  }, [Status, isStatus, dispatch])

  return (
    <>
      <RestHeader />

      {
        Status === "Unauthorized User" && <div className='font-semibold container mx-auto rounded-lg p-2 bg-red-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0'>{Status}</div>
      }
      {
        Status === "User Authenticated" && <div className='font-semibold container mx-auto rounded-lg p-2 bg-green-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0'>{Status}</div>
      }

      {
        isStatus === "updated" && <div className='font-semibold container mx-auto rounded-lg p-2 bg-red-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0'>Item already added to cart</div>
      }
      {
        isStatus === "added" && <div className='font-semibold container mx-auto rounded-lg p-2 bg-green-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0'>Item added to cart</div>
      }
      <Outlet />

      {Cart[0]?.length > 0 && <CartDiv />}

      <Footer />
    </>
  )
}

export default SinglePage