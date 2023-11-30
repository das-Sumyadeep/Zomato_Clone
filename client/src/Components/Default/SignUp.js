import React, { useState } from 'react'
import googleImg from '../../Assets/google.png'
import { signupUser } from '../../Redux/User/ApiCalls';
import { useDispatch } from 'react-redux';

const SignUp = (props) => {

  const { setSignUp } = props;
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const google = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.fullname}, Email: ${formData.email}, Password: ${formData.password}`);
    signupUser(formData, dispatch);
    setFormData({ fullname: "", email: "", password: "" });
    setSignUp(prev => !prev);
  };

  return (
    <>

      <div className='bg-Zomato-50 top-0 left-0 fixed w-full h-full mx-auto z-50'>

        <div className=' xl:w-1/4 lg:w-1/3 xs:w-80 sm:w-96 xm:w-2/3 md:w-2/3 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-Zomato-1002 rounded-lg py-3'>
          <div className='flex items-center justify-between w-full my-2'>
            <h2 className='text-3xl text-gray-600 font-medium'>Sign up</h2>
            <div
              className='text-4xl cursor-pointer w-12 text-center pb-2'
              onClick={() => setSignUp(prev => !prev)}
            >&times;</div>
          </div>

          <form className='flex flex-col gap-3 py-2 w-full h-full ' onSubmit={handleSubmit}>

            <input type="text" id="fullname" name="fullname" placeholder='Full Name' autoComplete='off' required value={formData.fullname} onChange={handleChange} className='px-3 py-2 text-lg border-2 rounded-lg' />

            <input type="email" id="email" name="email" placeholder='Email' autoComplete='off' required value={formData.email} onChange={handleChange} className='px-3 py-2 text-lg border-2 rounded-lg' />

            <input type="password" id="password" name="password" placeholder='Password' autoComplete='off' required value={formData.password} onChange={handleChange} className='px-3 py-2 text-lg border-2 rounded-lg' />

            <button type="submit" className='bg-gray-400 text-lg p-2 w-full text-white focus:bg-red-500 hover:bg-red-500 font-semibold rounded-lg cursor-pointer'>Create account</button>
          </form>
          <div className='w-full border-t-2 relative bottom-0 left-0 my-2 flex items-center justify-center'>
            <div className='relative bottom-4 text-center text-xl rounded-full bg-Zomato-1002 w-8 text-gray-600 z-51'>or</div>
          </div>
          <div className='flex items-center justify-center gap-x-4 px-3 py-2 text-lg border-2 border-gray-300 rounded-lg relative bottom-5 cursor-pointer' onClick={google}>
            <img src={googleImg} alt='google' className='w-8 h-8' />
            <p>Continue with Google</p>
          </div>
          {/* <div className='flex items-center justify-start gap-x-2 mb-4 text-lg'>
            <p className=' text-gray-500'>Already have an account?</p>
        
            <span className='text-red-400 cursor-pointer'>Log in</span>

          </div> */}
        </div>

      </div>

    </>
  )
}

export default SignUp