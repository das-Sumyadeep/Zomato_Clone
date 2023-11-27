import React, { useState } from 'react'
import FoodTab from './FoodTab'
import { FaPlus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { BiSolidUserCircle, BiSearch } from 'react-icons/bi'
import { MdLocationPin, MdMyLocation } from 'react-icons/md'
import { GoTriangleDown, GoTriangleUp } from 'react-icons/go'
import { getSearch } from '../../Redux/Restaurant/ApiCalls'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../Assets/logo.webp'
import SearchDiv from './SearchDiv'
import { getLoca } from '../../Redux/Location/ApiCalls'
import { updateLoc } from '../../Redux/Location/LocSlice'
import { updateAddress } from '../../Redux/User/ApiCalls'
import SignIn from './SignIn'
import SignUp from './SignUp'
import { status } from '../../Redux/User/UserSlice'

const MobileHead = () => {

    const [city, setCity] = useState('');
    const [loc, setLoc] = useState(false);
    const [search, setSearch] = useState('');
    const [profile, setProfile] = useState(false);
    const [address, setAddress] = useState(false);
    const [searchBar, setSearchBar] = useState(null);
    const [locationBar, setlocationBar] = useState(null);
    const [newAddress, setNewAddress] = useState('');
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const dispatch = useDispatch();
    const { searchResponse, isError, error } = useSelector((state) => state.search);
    const { locity } = useSelector((state) => state.location)
    const { User } = useSelector((state) => state.user)

    const handleSearch = (e) => {

        setSearch(e.target.value)
        search.length >= 1 && getSearch(locity, search, dispatch);
    }

    const handleLocation = () => {
        setLoc((prev) => !prev)
    }

    const handleCurrLoc = () => {
        navigator.geolocation.getCurrentPosition(position => {
            //getting latitude and longitude from the position obj
            const { latitude, longitude } = position.coords;
            getLoca(latitude, longitude, dispatch);
            setCity('');
            setLoc((prev) => !prev);
        });
    }

    const handleCity = (e) => {
        setCity(e.target.value);
        dispatch(updateLoc(e.target.value));
    }

    const handleAddress = () => {
        setAddress((prev) => !prev);
    }

    const onChangeHandler = (e) => {
        setNewAddress(() => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newAddress);
        setAddress((prev) => !prev);
        setLoc((prev) => !prev);
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3001/auth/logout';
    }

    return (
        <>
            <div className='flex flex-col'>
                <div className='py-3 px-5 flex items-center justify-between shadow-md '>
                    <NavLink to='/'>
                        <div className='w-24 flex justify-start items-center gap-x-3'>
                            <img src={logo} alt='Logo'
                                className='w-full h-full' />
                            {/* <span className='text-xl font-bold text-red-500 '>2.0</span> */}
                        </div>
                    </NavLink>
                    <div className='flex items-center gap-3'>
                        {/* <button className='bg-Zomato-400 text-sm font-semibold px-3 py-2 text-white rounded-full'>Use App</button> */}
                        <span className='rounded-full w-8'>
                            <BiSolidUserCircle className='w-full h-full text-black' onClick={() => setProfile(!profile)} />
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

                <div className='py-3 px-5 flex items-center justify-between shadow-sm h-14'>
                    <div className='flex items-center gap-2' onClick={() => setlocationBar(true)}>
                        <MdLocationPin className='text-Zomato-300 w-6 h-6' />
                        <span className='font-semibold text-sm'>{ locity && `${locity}`}</span>
                    </div>
                    <span className='rounded-full p-2 bg-gray-100' onClick={() => setSearchBar(true)}>
                        <BiSearch className='text-black w-6 h-6' />
                    </span>
                </div>
            </div>
            <FoodTab />

            <div className='bg-Zomato-50 h-full w-full z-50 fixed top-0 left-0' style={{ display: locationBar ? 'block' : 'none' }}>
                <div className='absolute bg-white h-full w-full top-20 left-0 '>

                    <span
                        className='absolute top-0 xs:right-3 sm:right-4 text-4xl font-bolder z-50 cursor-pointer text-black'
                        onClick={() => setlocationBar(null)}
                    >&times;</span>

                    <div className='flex items-center border-r-2 gap-2 absolute top-12 w-full border-2 border-gray-300 rounded-lg'>
                        <MdLocationPin className='text-Zomato-300 w-8 h-8 mx-3' onClick={handleLocation} />
                        <input type='search' className='w-full h-full focus:outline-none py-4' placeholder={locity && `${locity}`} value={city} onChange={handleCity} />
                        {loc ? <GoTriangleUp className='mx-4 w-8 h-8 cursor-pointer' onClick={handleLocation} /> : <GoTriangleDown className='mx-4 w-8 h-8 cursor-pointer' onClick={handleLocation} />}
                    </div>


                    <div className='h-40 w-80 absolute z-10 bg-Zomato-1002 top-28 left-6 shadow-lg rounded-lg' style={{ display: loc ? 'block' : 'none' }}>
                        <div
                            className='w-full h-20 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleCurrLoc}>
                            <MdMyLocation className='text-2xl text-red-500' />
                            <p className='text-xl text-red-500'>Detect current location</p>
                        </div>
                        <div className='w-full h-20 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleAddress}>
                            <FaPlus className='text-2xl, text-red-500' />
                            <p className='text-xl text-red-500'>Add delivery address</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' text-white bg-Zomato-1001 z-50 top-0 left-0 fixed w-full h-full mx-auto' style={{ display: address ? 'block' : 'none' }}>
                <div className='w-1/2 xl:w-1/3 lg:1/3 xs:w-80 sm:w-96 xm:w-2/3 md:w-2/3 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end'>
                    <div
                        className='text-3xl cursor-pointer bg-red-500 rounded-full w-12 text-center pb-2 my-2'
                        onClick={() => setAddress(false)}
                    >&times;</div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-4 rounded-lg bg-Zomato-1000 w-full h-full '>

                        <div className='flex flex-col items-start gap-y-3'>
                            <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Address for Delivery :</label>
                            <textarea id="reviewText" name="reviewText" onChange={onChangeHandler} value={newAddress}
                                placeholder='Write Your Address...'
                                className='xl:text-lg lg:text-lg xs:text-md text-gray-600 p-3 w-full h-32 placeholder:text-red-500 outline-none' />
                        </div>

                        <button type="submit" className='bg-red-300 text-lg p-2 w-full text-white focus:bg-red-500 hover:bg-red-500 font-semibold rounded-md cursor-pointer'>Submit</button>
                    </form>
                </div>
            </div>

            <div className='bg-Zomato-50 h-full w-full z-50 fixed top-0 left-0' style={{ display: searchBar ? 'block' : 'none' }}>
                <div className='absolute bg-Zomato-1002 h-full w-full top-20 left-0 '>
                    <span
                        className='absolute top-0 xs:right-3 sm:right-4 text-4xl font-bolder z-50 cursor-pointer text-black'
                        onClick={() => setSearchBar(null)}
                    >&times;</span>
                    <div className='flex items-center w-full gap-2 border-2 border-gray-300 px-5 py-3 mt-12 rounded-lg'>
                        <BiSearch className='text-gray-400 w-6 h-6' />
                        <input type='search'
                            className='w-full focus:outline-none ' placeholder='Search for restaurant, cuisine or a dish'
                            onChange={handleSearch} />

                    </div>

                    <div className=' overflow-y-auto h-full w-full absolute top-20 left-0 p-5 rounded-lg' style={{ display: search ? 'block' : 'none' }}>
                        {
                            isError ? <p className=' text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{error.error}</p>
                                : searchResponse && searchResponse.map((item, index) => {
                                    return (
                                        <NavLink to={`/${item.type}/${item._id}/overview`} key={index}>
                                            <SearchDiv {...item} />
                                        </NavLink>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>

        </>
    );
}

const TabHead = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#e23744' : '',
            borderBottom: isActive ? 'solid 3px red' : ''
        }
    }

    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [loc, setLoc] = useState(false);
    const [address, setAddress] = useState(false);
    const [newAddress, setNewAddress] = useState('');
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const dispatch = useDispatch();
    const { searchResponse, isError, error } = useSelector((state) => state.search);
    const { locity } = useSelector((state) => state.location)
    const { User } = useSelector((state) => state.user)

    const handleSearch = (e) => {

        setSearch(e.target.value);

        search.length >= 1 && getSearch(locity, search, dispatch);

    }

    const handleLocation = () => {
        setLoc((prev) => !prev)
    }

    const handleCurrLoc = () => {
        navigator.geolocation.getCurrentPosition(position => {
            //getting latitude and longitude from the position obj
            const { latitude, longitude } = position.coords;
            getLoca(latitude, longitude, dispatch);
            setCity('');
            setLoc((prev) => !prev);
        });
    }

    const handleCity = (e) => {
        setCity(e.target.value);
        dispatch(updateLoc(e.target.value));
    }

    const handleAddress = () => {
        setAddress((prev) => !prev);
    }

    const onChangeHandler = (e) => {
        setNewAddress(() => e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newAddress);
        setAddress((prev) => !prev);
        setLoc((prev) => !prev);
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3001/auth/logout';
    }

    return (
        <>
            <div className='px-6 pt-4 flex flex-col gap-5 shadow-sm'>

                <div className='flex items-center justify-between'>
                    <NavLink to='/'>
                        <div className='w-40 flex justify-start items-center gap-x-3'>
                            <img src={logo} alt='Logo'
                                className='w-full h-full' />
                            {/* <span className='text-xl font-bold text-red-500 '>2.0</span> */}
                        </div>
                    </NavLink>
                    {

                        User && User._id ?
                            <div className='flex items-center gap-x-2'>

                                <div className='rounded-full w-10'>
                                    <BiSolidUserCircle className='w-full h-full text-gray-400' />
                                </div>
                                <div className='flex items-center gap-x-4 text-xl lg:text-lg'>
                                    <h2 className='text-red-500 font-medium'>{`${User.fullname.substring(0, 9)}...`}</h2>
                                    <span className='text-gray-500 cursor-pointer font-medium' onClick={handleLogout}>Log out</span>
                                </div>
                            </div> :
                            <div className='flex items-center gap-x-5 text-xl lg:text-lg text-gray-500 font-medium'>

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

                <div className='w-full flex items-center gap-3 bg-white px-3 py-3 rounded-lg
                border shadow-md'>
                    <div className='flex items-center border-r-2 gap-2'>
                        <MdLocationPin className='text-Zomato-300 w-6 h-6' onClick={handleLocation} />
                        <input type='search' className='w-40 focus:outline-none ' placeholder={locity && `${locity}`} value={city} onChange={handleCity} />
                        {loc ? <GoTriangleUp className='mx-3 w-6 h-6 cursor-pointer' onClick={handleLocation} /> : <GoTriangleDown className='mx-3 w-6 h-6 cursor-pointer' onClick={handleLocation} />}
                    </div>

                    <div className='h-40 w-80 absolute z-10 bg-white top-36 left-6 shadow-lg rounded-lg' style={{ display: loc ? 'block' : 'none' }}>
                        <div
                            className='w-full h-20 hover:bg-gray-100 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleCurrLoc}>
                            <MdMyLocation className='text-2xl text-red-500' />
                            <p className='text-xl text-red-500'>Detect current location</p>
                        </div>
                        <div className='w-full h-20 hover:bg-gray-100 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleAddress}>
                            <FaPlus className='text-2xl, text-red-500' />
                            <p className='text-xl text-red-500'>Add delivery address</p>
                        </div>
                    </div>

                    <div className=' text-white bg-Zomato-1001 z-50 top-0 left-0 fixed w-full h-full mx-auto' style={{ display: address ? 'block' : 'none' }}>
                        <div className='w-1/2 xl:w-1/3 lg:1/3 xs:w-80 sm:w-96 xm:w-2/3 md:w-2/3 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end'>
                            <div
                                className='text-3xl cursor-pointer bg-red-500 rounded-full w-12 text-center pb-2 my-2'
                                onClick={() => setAddress(false)}
                            >&times;</div>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-4 rounded-lg bg-Zomato-1000 w-full h-full '>

                                <div className='flex flex-col items-start gap-y-3'>
                                    <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Address for Delivery :</label>
                                    <textarea id="reviewText" name="reviewText" onChange={onChangeHandler} value={newAddress}
                                        placeholder='Write Your Address...'
                                        className='xl:text-lg lg:text-lg xs:text-md text-gray-600 p-3 w-full h-32 placeholder:text-red-500 outline-none' />
                                </div>

                                <button type="submit" className='bg-red-300 text-lg p-2 w-full text-white focus:bg-red-500 hover:bg-red-500 font-semibold rounded-md cursor-pointer'>Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className='flex items-center w-full gap-2'>
                        <BiSearch className='text-gray-400 w-6 h-6' />
                        <input type='search'
                            className='w-full focus:outline-none ' placeholder='Search for restaurant, cuisine or a dish'
                            onChange={handleSearch} />

                    </div>
                </div>


                <div className='mx-3 overflow-y-auto h-72 w-2/3 mb-5 absolute z-10 bg-white top-36 left-64 p-5 shadow-lg rounded-lg' style={{ display: search ? 'block' : 'none' }}>
                    {
                        isError ? <p className=' text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{error.error}</p>
                            : searchResponse && searchResponse.map((item, index) => {
                                return (
                                    <NavLink to={`/${item.type}/${item._id}/overview`} key={index}>
                                        <SearchDiv {...item} />
                                    </NavLink>
                                )
                            })
                    }
                </div>

                <div className='flex items-center justify-start gap-6 pt-4 text-gray-500 text-xl font-medium'>

                    <NavLink style={navLinkStyle} to="/Delivery">
                        <div className='h-20 w-40 flex items-center gap-3  '>
                            <div className='w-16 h-16 border border-gray-300 rounded-full p-2 bg-Zomato-900'>
                                <img src='https://www.pngmart.com/files/10/Delivery-Boy-Vector-PNG.png' alt='DeliveryOut' className='w-full h-full' />
                            </div>
                            <h3>Delivery</h3>
                        </div>
                    </NavLink>
                    <NavLink style={navLinkStyle} to="/Dining">
                        <div className='h-20 w-44 flex items-center gap-3'>
                            <div className='w-16 h-16 border rounded-full p-2 border-gray-300 bg-Zomato-900'>
                                <img src='https://i.pinimg.com/originals/b1/56/84/b156841e9bd6f6b88a0491d09fac1fa2.png' alt='MealOut' className='w-full h-full' />
                            </div>
                            <h3>DiningOut</h3>
                        </div>
                    </NavLink>
                    <NavLink style={navLinkStyle} to="/Nightlife">
                        <div className='h-20 w-44 flex items-center gap-3'>
                            <div className='w-16 h-16 border rounded-full p-2 border-gray-300 bg-Zomato-900'>
                                <img src='https://images.vexels.com/media/users/3/156510/isolated/preview/5b4201b73def34da3d6ad41414870d92-alcohol-bottle-flat-icon-by-vexels.png' alt='NightOut' className='w-full h-full' />
                            </div>
                            <h3>NightLife</h3>
                        </div>
                    </NavLink>

                </div>
            </div>

        </>
    )
}

const LapHead = () => {

    const navLinkStyle = ({ isActive }) => {
        return {
            color: isActive ? '#e23744' : '',
            borderBottom: isActive ? 'solid 3px red' : ''
        }
    }

    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [loc, setLoc] = useState(false);
    const [address, setAddress] = useState(false);
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [newAddress, setNewAddress] = useState({ address: "" });
    const dispatch = useDispatch();
    const { searchResponse, error, isError } = useSelector((state) => state.search)
    const { locity } = useSelector((state) => state.location)
    const { User, token } = useSelector((state) => state.user)

    const handleSearch = (e) => {

        setSearch(e.target.value);

        search.length > 1 && getSearch(locity, search, dispatch);

    }

    const handleLocation = () => {
        setLoc((prev) => !prev)
    }

    const handleCurrLoc = () => {
        navigator.geolocation.getCurrentPosition(position => {
            //getting latitude and longitude from the position obj
            const { latitude, longitude } = position.coords;
            getLoca(latitude, longitude, dispatch);
            setCity('');
            setLoc((prev) => !prev);
        });
    }

    const handleCity = (e) => {
        setCity(e.target.value);
        dispatch(updateLoc(e.target.value));
    }

    const handleAddress = () => {

        if (User._id) {

            setAddress((prev) => !prev);
        } else {
            setLoc((prev) => !prev);
            dispatch(status("Unauthorized User"));
        }
    }

    const onChangeHandler = (e) => {
        setNewAddress((prevAddress) => ({ ...prevAddress, address: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAddress(User._id, newAddress, token, dispatch);
        setAddress((prev) => !prev);
        setLoc((prev) => !prev);
    }

    const handleLogout = () => {
        window.location.href = 'http://localhost:3001/auth/logout';
    }

    return (
        <>
            <div className='px-6 pt-4 flex flex-col gap-5 border-b-2'>

                <div className='flex items-center justify-between'>

                    <div className='flex items-center justify-start gap-8'>
                        <NavLink to='/'>
                            <div className='w-44 flex justify-start items-center gap-x-3 '>
                                <img src={logo} alt='Logo'
                                    className='w-full h-full' />
                                {/* <span className='text-xl font-bold text-red-500 '>2.0</span> */}
                            </div>
                        </NavLink>

                        <div className='w-full flex items-center justify-start gap-x-3 ml-6 bg-white p-3 rounded-lg
                    border shadow-md'>
                            <div className='flex items-center border-r-2 gap-2'>
                                <MdLocationPin className='text-Zomato-300 w-6 h-6' onClick={handleLocation} />
                                <input type='search' className='w-40 lg:w-20 focus:outline-none ' placeholder={locity && `${locity}` } value={city} onChange={handleCity} />
                                {loc ? <GoTriangleUp className='mx-3 w-6 h-6 cursor-pointer' onClick={handleLocation} /> : <GoTriangleDown className='mx-3 w-6 h-6 cursor-pointer' onClick={handleLocation} />}
                            </div>

                            <div className='h-40 w-80 absolute z-10 bg-white top-20 left-96 shadow-lg rounded-lg' style={{ display: loc ? 'block' : 'none' }}>
                                <div
                                    className='w-full h-20 hover:bg-gray-100 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleCurrLoc}>
                                    <MdMyLocation className='text-2xl text-red-500' />
                                    <p className='text-xl text-red-500'>Detect current location</p>
                                </div>
                                <div className='w-full h-20 hover:bg-gray-100 flex items-center justify-start gap-x-5 px-6 cursor-pointer' onClick={handleAddress} >
                                    <FaPlus className='text-2xl, text-red-500' />
                                    <p className='text-xl text-red-500'>Add delivery address</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-2'>
                                <BiSearch className='text-gray-400 w-6 h-6' />
                                <input type='search'
                                    value={search}
                                    className='w-96 lg:w-72 focus:outline-none' placeholder='Search for restaurant, cuisine or a dish'
                                    onChange={handleSearch} />
                            </div>
                        </div>

                        <div className=' text-white bg-Zomato-1001 z-50 top-0 left-0 fixed w-full h-full mx-auto' style={{ display: address ? 'block' : 'none' }}>
                            <div className='w-1/2 xl:w-1/3 lg:1/3 xs:w-80 sm:w-96 xm:w-2/3 md:w-2/3 px-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-end'>
                                <div
                                    className='text-3xl cursor-pointer bg-red-500 rounded-full w-12 text-center pb-2 my-2'
                                    onClick={() => setAddress(false)}
                                >&times;</div>
                                <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-4 rounded-lg bg-Zomato-1000 w-full h-full '>

                                    <div className='flex flex-col items-start gap-y-3'>
                                        <label className='xl:text-lg lg:text-lg xs:text-md font-semibold '>Address for Delivery :</label>
                                        <textarea id="address" name="address" onChange={onChangeHandler} value={newAddress.address}
                                            placeholder='Write Your Address...'
                                            className='xl:text-lg lg:text-lg xs:text-md text-gray-600 p-3 w-full h-32 placeholder:text-red-500 outline-none' />
                                    </div>

                                    <button type="submit" className='bg-red-300 text-lg p-2 w-full text-white focus:bg-red-500 hover:bg-red-500 font-semibold rounded-md cursor-pointer'>Submit</button>
                                </form>
                            </div>
                        </div>

                        <div className='mx-3 overflow-y-auto h-80 w-1/3 mb-5 absolute z-10 bg-white top-20 left-1/3 p-5 shadow-lg rounded-lg' style={{ display: search ? 'block' : 'none' }}>
                            {
                                isError ? <p className=' text-md md:text-lg xm:text-lg lg:text-xl xl:text-xl font-medium'>{error.error}</p>
                                    : searchResponse && searchResponse.map((item, index) => {
                                        return (
                                            <NavLink to={`/${item.type}/${item._id}/overview`} key={index}>
                                                <SearchDiv {...item} />
                                            </NavLink>
                                        )
                                    })
                            }

                        </div>
                    </div>

                    {
                        User && User._id ?
                            <div className='flex items-center gap-x-2'>

                                <div className='rounded-full w-10 text-center'>
                                    <BiSolidUserCircle className='w-full h-full text-gray-400' />
                                </div>
                                <div className='flex items-center gap-x-4 text-xl lg:text-lg'>
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

                <div className='flex items-center justify-start gap-6 pt-4 text-gray-500 text-xl font-medium'>

                    <NavLink style={navLinkStyle} to="/Delivery">
                        <div className='h-20 w-40 flex items-center gap-3  '>
                            <div className='w-16 h-16 border border-gray-300 rounded-full p-2 bg-Zomato-900'>
                                <img src='https://www.pngmart.com/files/10/Delivery-Boy-Vector-PNG.png' alt='DeliveryOut' className='w-full h-full' />
                            </div>
                            <h3>Delivery</h3>
                        </div>
                    </NavLink>
                    <NavLink style={navLinkStyle} to="/Dining">
                        <div className='h-20 w-44 flex items-center gap-3'>
                            <div className='w-16 h-16 border rounded-full p-2 border-gray-300 bg-Zomato-900'>
                                <img src='https://i.pinimg.com/originals/b1/56/84/b156841e9bd6f6b88a0491d09fac1fa2.png' alt='MealOut' className='w-full h-full' />
                            </div>
                            <h3>DiningOut</h3>
                        </div>
                    </NavLink>
                    <NavLink style={navLinkStyle} to="/Nightlife">
                        <div className='h-20 w-44 flex items-center gap-3'>
                            <div className='w-16 h-16 border rounded-full p-2 border-gray-300 bg-Zomato-900'>
                                <img src='https://images.vexels.com/media/users/3/156510/isolated/preview/5b4201b73def34da3d6ad41414870d92-alcohol-bottle-flat-icon-by-vexels.png' alt='NightOut' className='w-full h-full' />
                            </div>
                            <h3>NightLife</h3>
                        </div>
                    </NavLink>

                </div>
            </div>


        </>
    )
}

const Header = () => {

    return (
        <>
            <nav className='md:hidden xm:hidden lg:hidden xl:hidden'>
                <MobileHead />
            </nav>
            <nav className='xl:hidden lg:hidden sm:hidden xs:hidden'>
                <TabHead />
            </nav>
            <nav className='hidden lg:block xl:block container mx-auto'>
                <LapHead />
            </nav>
        </>
    );
}


export default Header;