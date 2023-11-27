import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Menu from './Menu';
import Dishes from './Dishes';
import Review from './Review';
import { useParams } from 'react-router-dom';
import { getOrders } from '../../Redux/Order/ApiCalls';
import { getReviews } from '../../Redux/Review/ApiCalls';

// import Location from './Location';

const Overview = () => {

  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    getOrders(id, dispatch)
    getReviews(id, dispatch)
}, [id, dispatch])

  return (
    <>

      <h1 className='p-3 text-3xl font-semibold'>About this place</h1>
      <Menu />
      {/* <Location /> */}
      <Dishes />
      <Review />

    </>
  )
}

export default Overview