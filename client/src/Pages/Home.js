import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../Components/Default/Header";
import Footer from "../Components/Default/Footer";
import { getRestaurants } from "../Redux/Restaurant/ApiCalls";
import { getLoca } from "../Redux/Location/ApiCalls";
import { getUser } from "../Redux/User/ApiCalls";
import Cookies from 'universal-cookie';
import { setToken, status } from "../Redux/User/UserSlice";

export const Home = () => {

  const dispatch = useDispatch();

  const cookies = new Cookies();
  const { token } = useSelector(state => state.user);

  if (token !== null) {
    cookies.set('jwt', token, { maxAge: 24 * 60 * 60, path: '/' });
  }
  const NewToken = cookies.get('jwt');

  useEffect(() => {
    if (NewToken) {
      // Dispatch the setToken action
      dispatch(setToken(NewToken));
    }

    getUser(token, dispatch);

  }, [NewToken, dispatch, token]);


  const { locity } = useSelector(state => state.location);
  console.log(locity);
  
  useEffect(() => {
    
    navigator.geolocation.getCurrentPosition((position) => {
      //getting latitude and longitude from the position obj
      const { latitude, longitude } = position.coords;
      
      locity === "" && getLoca(latitude, longitude, dispatch);

    });

    locity && getRestaurants(locity, dispatch);
    
  }, [locity, dispatch]);
  

  const { Status, User } = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      dispatch(status(""))
    }, 2000);
  }, [Status, dispatch])

  return (
    <>
      <Header />
      {
        (Status && User._id) && <div className='font-semibold container mx-auto rounded-lg p-2 mt-3 bg-green-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0 '>{Status}</div>
      }
      {
        (Status && !User._id) && <div className='font-semibold container mx-auto rounded-lg p-2 mt-3 bg-red-500 text-white xl:text-xl lg:text-lg xm:text-md w-full text-center relative top-0 left-0 '>{Status}</div>
      }
      <Outlet />
      <Footer />
    </>
  );
};
