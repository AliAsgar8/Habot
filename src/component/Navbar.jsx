import React, { useState } from 'react';
import habot_logo from '../assets/images/png/habot_logo.png';
import down_arrow from '../assets/images/svg/down_arrow.svg';
import hamburger from '../assets/images/svg/hamburger.svg';
import close from '../assets/images/png/close.png';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const sidebarToggle = () => {
        setSidebar(!sidebar);
    };

    return (
        <div className="habot_navbar_section px-10 md:px-16 flex justify-between items-center h-[100px]">
            <div className="habot_logo">
                <img src={habot_logo} alt="Habot Logo" />
            </div>

            {/* Desktop Navbar */}
            <div className="habot_suppliers_service_login hidden md:flex gap-10 items-center">
                <p className="text-xl text-gray-500 m-0">Find Suppliers</p>
                <div className="flex items-center gap-2 justify-center">
                    <p className="text-xl text-gray-500 m-0">Find Service Tag</p>
                    <div>
                        <img src={down_arrow} alt="Down Arrow" className="h-4 w-4" />
                    </div>
                </div>
                <button className="border-2 border-green-600 text-green-600 px-3 py-2 rounded-md font-bold">
                    Login/Sign Up
                </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="relative block md:hidden">
                <div onClick={sidebarToggle} className="hamburger h-[30px] w-[30px]">
                    <img src={hamburger} alt="Hamburger Menu" className="h-[100%] w-[100%]" />
                </div>

                {/* Sidebar */}
                <div
                    className={`fixed top-0 right-0 h-full bg-gray-900 z-20 w-[100%] sm:w-[70%] transform ${sidebar ? 'translate-x-0' : 'translate-x-full'
                        } transition-transform duration-700`}
                >
                    {/* Close Button */}
                    <div
                        onClick={sidebarToggle}
                        className="h-[50px] w-[50px]  p-1 rounded-full mt-4 ml-5 cursor-pointer"
                    >
                        <img src={close} alt="Close Sidebar" className="h-[100%] w-[100%]" />
                    </div>

                    {/* Sidebar Content */}
                    <div className="flex flex-col gap-4 mt-10 px-5 text-center">
                        <p className="text-xl text-white">Find Suppliers</p>
                        <p className="text-xl text-white">Find Service Tag</p>
                        <button className="border-2 border-green-600 text-green-600 px-3 py-2 rounded-md font-bold">
                            Login/Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
