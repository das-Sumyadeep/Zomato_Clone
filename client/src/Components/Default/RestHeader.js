import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../Assets/logo.webp'
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md'
import { GoTriangleUp } from 'react-icons/go'
import { getSearch } from '../../Redux/Restaurant/ApiCalls';
import { BiSolidUserCircle, BiSearch } from 'react-icons/bi';
import SearchDiv from './SearchDiv';
import SignIn from './SignIn';
import SignUp from './SignUp';

const SmRestHeader = () => {

    const [search, setSearch] = useState('');
    const [profile, setProfile] = useState(false);
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { searchResponse, isError, error } = useSelector((state) => state.search);
    const { locity } = useSelector((state) => state.location)
    const { User } = useSelector((state) => state.user)

    const handleSearch = (e) => {

        setSearch(e.target.value)
        search.length > 1 && getSearch(locity, search, dispatch);
    }

    const handleBack = () => {
        navigate(-1);
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3001/auth/logout';
    }

    return (
        <>
            <div className='flex flex-col'>
                <div className='py-3 px-2 flex items-center justify-between shadow-md'>
                    <div className='flex items-center gap-3'>
                        <BsArrowLeft className='w-6 h-6' onClick={handleBack} />
                        <NavLink to='/'>
                            <div className='w-24 flex justify-start gap-x-2 items-center'>
                                <img src={logo} alt='Logo'
                                    className='w-full h-full' />
                                {/* <span className='text-xl font-bold text-red-500 '>2.0</span> */}
                            </div>
                        </NavLink>
                    </div>
                    <div className='flex items-center gap-2'>
                        {/* <button className='bg-Zomato-400 text-sm font-semibold px-3 py-2 text-white rounded-full'>Use App</button> */}
                        <span className='rounded-full w-8'>
                            <BiSolidUserCircle className='w-full h-full text-black' onClick={() => setProfile(!profile)}/>
                        </span>
                    </div>
                </div>

                <div className='w-48 h-36 absolute border-2 shadow-lg right-0 top-16 bg-Zomato-1002 rounded-lg z-50' style={{ display: profile ? 'block' : 'none' }}>
                    {

                        User && User._id ?
                            <div className='flex flex-col items-start gap-y-8 px-3 py-4'>

                                <div className='flex items-center justify-start gap-x-2 text-lg'>
                                    <div className='rounded-full w-8'>
                                        <BiSolidUserCircle className='w-full h-full text-gray-400' />
                                    </div>
                                    <h2 className='text-red-500 font-medium'>{`${User.fullname.substring(0, 9)}...`}</h2>
                                </div>
                                <span className='text-gray-800 cursor-pointer text-lg font-semibold' onClick={handleLogout}>Log out</span>
                            </div> :
                            <div className='flex flex-col items-center gap-y-8 text-lg font-semibold text-gray-800 px-3 py-4'>
                                <span className='cursor-pointer' onClick={() => setLogin(!login)} >Log in</span>
                                <span className='cursor-pointer' onClick={() => setSignUp(!signUp)}>Sign up</span>
                            </div>
                    }

                </div>

                {
                    login &&
                    <SignIn setLogin={setLogin} login={login} />
                }
                {
                    signUp &&
                    <SignUp setSignUp={setSignUp} signUp={signUp} />
                }

                <div className='flex items-center gap-2 m-3 border-2 p-3 rounded-full shadow-sm'>
                    <BiSearch className='text-gray-400 w-6 h-6' />
                    <input type='search'
                        className='w-full focus:outline-none ' placeholder='Search for restaurant, cuisine or a dish'
                        onChange={handleSearch} />
                </div>

                <div className=' overflow-y-auto bg-white z-50 absolute w-full h-64 mx-auto top-32 left-0 px-4 shadow-lg rounded-lg' style={{ display: search ? 'block' : 'none' }}>
                    {
                        isError ? <p className=' text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{error.error}</p>
                            : searchResponse && searchResponse.map((item, index) => {
                                return (
                                    <NavLink to={`/${item.type}/${item._id}/overview`} key={index} onClick={() => setSearch('')}>
                                        <SearchDiv {...item} />
                                    </NavLink>
                                )
                            })
                    }
                </div>

            </div>

        </>
    )
}

const LgRestHeader = () => {

    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const { searchResponse, error, isError } = useSelector((state) => state.search)
    const { locity } = useSelector((state) => state.location);
    const { User } = useSelector(state => state.user);

    const dispatch = useDispatch();

    const handleSearch = (e) => {

        setSearch(e.target.value)
        search.length > 1 && getSearch(locity, search, dispatch);
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3001/auth/logout';
    }

    return (
        <>
            <div className='flex items-center justify-between border-b-2 py-3'>

                <div className='flex items-center justify-start gap-8'>
                    <NavLink to='/'>
                        <div className='w-44 flex justify-start gap-x-3'>
                            <img src={logo} alt='Logo'
                                className='w-full h-full' />
                            {/* <span className='text-xl font-bold text-red-500 '>2.0</span> */}
                        </div>
                    </NavLink>

                    <div className='w-full flex items-center gap-3 ml-6 bg-white p-3 rounded-lg border shadow-md'>
                        <div className='flex items-center border-r-2 gap-2 cursor-not-allowed'>
                            <MdLocationPin className='text-Zomato-300 w-6 h-6' />
                            <input type='search' className='w-40 lg:w-20 focus:outline-none ' placeholder={locity && `${locity}`} readOnly />
                            <GoTriangleUp className='mx-3 w-6 h-6' />
                        </div>

                        <div className='flex items-center gap-2'>
                            <BiSearch className='text-gray-400 w-6 h-6' />
                            <input type='search'
                                value={search}
                                className='w-96 lg:w-72 focus:outline-none' placeholder='Search for restaurant, cuisine or a dish'
                                onChange={handleSearch} />
                        </div>



                        <div className='mx-3 overflow-y-auto h-80 w-1/3 mb-5 absolute z-10 bg-white top-20 left-1/4 p-5 shadow-lg rounded-lg' style={{ display: search ? 'block' : 'none' }}>
                            {
                                isError ? <p className=' text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{error.error}</p>
                                    : searchResponse && searchResponse.map((item, index) => {
                                        return (
                                            <NavLink to={`/${item.type}/${item._id}/overview`} key={index} onClick={() => setSearch('')}>
                                                <SearchDiv {...item} />
                                            </NavLink>
                                        )
                                    })
                            }

                        </div>
                    </div>
                </div>
                {
                    User && User._id ?
                        <div className='flex items-center gap-x-2'>

                            <div className='rounded-full w-10'>
                                <BiSolidUserCircle className='w-full h-full text-gray-400' />
                            </div>
                            <div className='flex items-center gap-x-4 text-xl lg:text-lg '>
                                <h2 className='text-red-500 font-medium'>{`${User.fullname.substring(0, 5)}...`}</h2>
                                <span className='text-gray-500 cursor-pointer' onClick={handleLogout}>Log out</span>
                            </div>
                        </div> :
                        <div className='flex items-center gap-x-5 text-xl lg:text-lg text-gray-500'>

                            <span className='cursor-pointer' onClick={() => setLogin(!login)} >Log in</span>
                            <span className='cursor-pointer' onClick={() => setSignUp(!signUp)}>Sign up</span>
                        </div>
                }

                {
                    login &&
                    <SignIn setLogin={setLogin} login={login} />
                }
                {
                    signUp &&
                    <SignUp setSignUp={setSignUp} signUp={signUp} />
                }
            </div>

        </>
    )
}


const RestHeader = () => {
    return (
        <>
            <nav className='lg:hidden xl:hidden'>
                <SmRestHeader />
            </nav>
            <nav className='hidden lg:block xl:block container mx-auto'>
                <LgRestHeader />
            </nav>
        </>
    )
}

export default RestHeader