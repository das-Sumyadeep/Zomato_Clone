import React from 'react'
import logo from '../../Assets/logo.webp'
import indianFlag from '../../Assets/indianFlag.jpeg'
import { GoChevronDown } from "react-icons/go";
import { FiGlobe } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className='hidden xm:block md:block xl:block lg:block'>

        <div className='bg-Zomato-1003 py-12 mt-24'>

          <div className='container mx-auto bottom-0'>
            <div className='flex items-center justify-between'>
              <div className='w-36 h-8 flex items-center gap-x-3 '>
                <img src={logo} alt='logo' className='w-full h-full' />
                {/* <p className='font-medium text-red-500 text-xl'>2.0</p> */}
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='border-2 border-gray-300 rounded-lg w-32 flex items-center gap-x-3 px-2 py-1 text-xl cursor-pointer'>
                  <div className='w-8 h-8 '>
                    <img src={indianFlag} alt='flag' className='w-full h-full' />
                  </div>
                  India <GoChevronDown /></div>
                <div className='border-2 border-gray-300 rounded-lg w-36 flex items-center gap-x-3 px-2 py-1 text-xl cursor-pointer'><FiGlobe className='w-6 h-6' /> English <GoChevronDown /></div>
              </div>
            </div>


            <div className='my-10 flex items-start justify-start xl:gap-x-36 xm:gap-x-12 md:gap-x-10 lg:gap-x-16'>
              <div>
                <p className='font-medium tracking-wider'>ABOUT ZOMATO</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Who We Are</li>
                  <li>Blog</li>
                  <li>Work With Us</li>
                  <li>Investor Relations</li>
                  <li>Report Fraud</li>
                  <li>Press Kit</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <p className='font-medium tracking-wider'>ZOMAVERSE</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Zomato</li>
                  <li>Blinkit</li>
                  <li>Feeding India</li>
                  <li>Hyperpure</li>
                  <li>Zomaland</li>
                </ul>
              </div>
              <div>
                <p className='font-medium tracking-wider'>FOR RESTAURANTS</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Partner With Us</li>
                  <li>Apps For You</li>
                </ul>
                <p className='font-medium tracking-wider mt-4'>FOR ENTERPRISES</p>
                <p className='flex flex-col gap-y-2 mt-4 text-gray-500'>Zomato For Enterprise</p>
              </div>
              <div>
                <p className='font-medium tracking-wider'>LEARN MORE</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Privacy</li>
                  <li>Security</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div>
                <p className='font-medium tracking-wider '>SOCIAL LINKS</p>
                <div className='flex items-center justify-start gap-x-2 mt-4 cursor-pointer'>
                  <FaLinkedin className='w-6 h-6' />
                  <FaInstagramSquare className='w-6 h-6' />
                  <FaYoutube className='w-6 h-6' />
                  <FaTwitter className='w-6 h-6' />
                  <FaFacebook className='w-6 h-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=' xs:block sm:block xm:hidden md:hidden xl:hidden lg:hidden'>

        <div className='bg-Zomato-1003 py-12 mt-24'>

          <div className='container mx-auto bottom-0'>
            <div className='flex flex-col items-start gap-y-10'>
              <div className='w-36 h-8 flex items-center gap-x-3 '>
                <img src={logo} alt='logo' className='w-full h-full' />
                <p className='font-medium text-red-500 text-xl'>2.0</p>
              </div>
              <div className='flex items-center gap-x-4'>
                <div className='border-2 border-gray-300 rounded-lg w-32 flex items-center gap-x-3 px-2 py-1 text-xl cursor-pointer'>
                  <div className='w-8 h-8 '>
                    <img src={indianFlag} alt='flag' className='w-full h-full' />
                  </div>
                  India <GoChevronDown /></div>
                <div className='border-2 border-gray-300 rounded-lg w-36 flex items-center gap-x-3 px-2 py-1 text-xl cursor-pointer'><FiGlobe className='w-6 h-6' /> English <GoChevronDown /></div>
              </div>
            </div>


            <div className='my-10 flex items-start justify-start sm:gap-x-16 xs:gap-x-10'>
              <div className='flex-col '>
                <p className='font-medium tracking-wider'>ABOUT ZOMATO</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Who We Are</li>
                  <li>Blog</li>
                  <li>Work With Us</li>
                  <li>Investor Relations</li>
                  <li>Report Fraud</li>
                  <li>Press Kit</li>
                  <li>Contact Us</li>
                </ul>

                <p className='font-medium tracking-wider sm:mt-3 xs:mt-3'>ZOMAVERSE</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Zomato</li>
                  <li>Blinkit</li>
                  <li>Feeding India</li>
                  <li>Hyperpure</li>
                  <li>Zomaland</li>
                </ul>
              </div>
              <div className='flex-col '>
                <p className='font-medium tracking-wider'>FOR RESTAURANTS</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Partner With Us</li>
                  <li>Apps For You</li>
                </ul>
                <p className='font-medium tracking-wider mt-4'>FOR ENTERPRISES</p>
                <p className='flex flex-col gap-y-2 mt-4 text-gray-500'>Zomato For Enterprise</p>

                <p className='font-medium tracking-wider sm:mt-3 xs:mt-3'>LEARN MORE</p>
                <ul className='flex flex-col gap-y-2 mt-4 text-gray-500'>
                  <li>Privacy</li>
                  <li>Security</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>


                <p className='font-medium tracking-wider sm:mt-3 xs:mt-3'>SOCIAL LINKS</p>
                <div className='flex items-center justify-start gap-x-2 mt-4 cursor-pointer'>
                  <FaLinkedin className='w-6 h-6' />
                  <FaInstagramSquare className='w-6 h-6' />
                  <FaYoutube className='w-6 h-6' />
                  <FaTwitter className='w-6 h-6' />
                  <FaFacebook className='w-6 h-6' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer