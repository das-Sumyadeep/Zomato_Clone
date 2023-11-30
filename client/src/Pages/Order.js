import React, { useEffect } from "react";
import Food from '../Assets/defaultFood.png'
import Footer from '../Components/Default/Footer'
import { FaArrowLeft, FaTrashAlt } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, deleteItem, getCart, getQuantity } from "../Redux/Cart/ApiCalls";

const Order = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, type } = useParams();
  const { token, User } = useSelector(state => state.user);

  const handleBack = () => {
    navigate(`/${type}/${id}/order`);
  }

  const handleDelete = (cart_id) => {

    deleteItem(User._id, id, cart_id, token, dispatch);
  }

  const handleDeleteAll = () => {

    deleteAll(User._id, id, token, dispatch);
    navigate(`/${type}/${id}/overview`);
  }

  const handleCart = (cart_id, types) => {
    getQuantity(User._id, id, cart_id, types, token, dispatch);
  }

  useEffect(() => {
    getCart(User._id, id, token, dispatch);

  }, [User._id, id, token, dispatch]);

  const { Cart, Price } = useSelector((state) => state.cart);

  const deliveryFee = Cart[0]?.length === 0 ? 0 : 45;
  const Tax = Cart[0]?.length === 0 ? 0 : 89;

  let GrandPrice = Number(Price) + Number(deliveryFee) + Number(Tax);

  const launchRazorpay = () => {
    let options = {
      key: 'rzp_test_nHnuF37LJsX6FW',
      amount: GrandPrice * 100,
      currency: "INR",
      name: "Zomato 2.0",
      Description: "Order Placed",
      handler: () => {

        deleteAll(User._id, id, token, dispatch);
        navigate(`/${type}/${id}/overview`);

      },
      theme: { color: "#c4242d" }
    };

    let rzp = new window.Razorpay(options);
    rzp.open();

  }

  return (
    <>
      <div className=" container mx-auto my-10 ">

        <div className="flex items-center justify-between py-4 border-b-2">
          <div className="flex items-center justify-start gap-x-6">
            <FaArrowLeft className="text-2xl cursor-pointer" onClick={handleBack} />
            <div className="flex items-baseline gap-x-2 justify-start">
              <span className="text-3xl font-bold tracking-wide ">{(Cart[0] === undefined || Cart[0]?.length === 0) ? "Restaurant Name" : Cart[0][0]?.restDetails.name}</span>
            </div>
          </div>
          <button className="bg-red-300 font-medium px-3 py-2 text-lg sm:text-md sm:w-48 xs:text-sm xs:w-36 rounded-lg hover:bg-red-500 hover:text-white"
            onClick={handleDeleteAll}
          >Clear All {`( ${(Cart[0] === undefined || Cart[0].length === 0) ? 0 : Cart[0]?.length} items )`}</button>

        </div>

        <div className="flex items-start justify-between sm:block xs:block md:block xm:block">

          <div className="overflow-y-auto h-96 w-full xl:w-2/3 lg:w-2/3 flex flex-col items-start shadow-lg p-6 my-3 bg-Zomato-1002">

            {
              Cart[0]?.map((item, index) => {
                return (

                  <div className='flex items-center justify-evenly gap-x-4 xl:gap-x-10 border-b-2 py-10 w-full' key={index}>
                    <div className='h-20 md:w-32 xm:w-32 xl:w-36 lg:w-32 border-2 sm:hidden xs:hidden'>
                      <img src={Food} alt='' className='w-full h-full rounded-lg' />
                    </div>
                    <p className='text-sm md:text-lg xm:text-lg lg:text-md xl:text-xl font-medium'>{item.foodDetails?.name}</p>
                    <p className='text-gray-500 text-sm xl:text-xl lg:text-lg xm:text-lg md:text-lg font-bold'>₹ {item.foodDetails?.price}</p>
                    <div className="flex items-center gap-x-3">
                      <div className="xl:text-3xl lg:text-xl xm:text-lg sm:text-md px-2 bg-gray-300 border-2 border-black text-center cursor-pointer" onClick={() => handleCart(item._id, "+")}>+</div>
                      <span className="text-xl">{item.quantity}</span>
                      <div className="xl:text-3xl lg:text-xl xm:text-lg sm:text-md px-2 bg-gray-300 border-2 border-black text-center cursor-pointer" onClick={() => handleCart(item._id, "-")}>-</div>
                    </div>
                    <FaTrashAlt className='xl:text-3xl lg:text-2xl text-2xl cursor-pointer hover:text-red-500' onClick={() => handleDelete(item._id)} />
                  </div>

                )
              })
            }
          </div>

          <div className="flex flex-col items-start gap-4 bg-Zomato-1002 p-5 xl:w-96 lg:w-72 my-3 rounded-lg shadow-lg">
            <div className="flex items-center justify-between gap-x-4 w-full">
              <h2 className="xl:text-2xl lg:text-xl font-semibold">Sub Total :</h2>
              <span className="xl:text-2xl lg:text-xl tracking-wide font-medium" >₹ {Price}</span>
            </div>
            <div className="flex items-center justify-between gap-x-4 w-full">
              <h2 className="xl:text-2xl lg:text-xl font-semibold">Delivery Fee :</h2>
              <span className="xl:text-2xl lg:text-xl tracking-wide font-medium">₹ {deliveryFee}</span>
            </div>
            <div className="flex items-center justify-between gap-x-4 border-b-2 w-full pb-4">
              <h2 className="xl:text-2xl lg:text-xl font-semibold">GST (Tax) :</h2>
              <span className="xl:text-2xl lg:text-xl tracking-wide font-medium">₹ {Tax}</span>
            </div>
            <div className="flex items-center justify-between gap-x-4 w-full">
              <h2 className="xl:text-2xl lg:text-xl font-semibold">Grand Total :</h2>
              <span className="xl:text-2xl lg:text-xl tracking-wide font-medium">₹ {GrandPrice}</span>
            </div>

            <div className="flex items-center justify-center gap-x-3 border-2 rounded-lg w-full py-3 my-3 cursor-pointer bg-red-300 text-black hover:text-white  hover:border-red-300 hover:bg-red-500">
              <MdOutlineSecurity className="xl:text-2xl lg:text-xl" /><span className="text-xl font-medium" onClick={launchRazorpay}>Pay Securely</span>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
};

export default Order;
