import React from 'react'
import {useNavigate} from 'react-router-dom'
import error from '../Assets/error.png'
import Footer from '../Components/Default/Footer';

const Error = () => {

  const navigate = useNavigate();

  const handleError = () => {
    navigate('/')
  }

  return ( 
    <>
    <div className='flex flex-col items-center gap-y-8 my-6 container mx-auto'>
      <img src={error} alt='Error'/>
      <button className='text-xl px-3 py-2 bg-red-400 text-white font-semibold rounded-lg' onClick={handleError}>Go To Home Page</button>
    </div>
    <Footer/>
    </>
  )
}

export default Error