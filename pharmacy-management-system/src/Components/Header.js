import React from 'react';
import { FaSearch, FaGlobe, FaBell } from 'react-icons/fa';
import logo from './img/logo.png'; 

const Navbar = () => {
    return (
        <div className=" shadow-sm flex items-center justify-between p-2 space-x-12 ml-72">
          <div style={{backgroundColor: '#FFFFFF'}} className="flex items-center flex-1 justify-between ml-4">
            <div className="relative flex-1 max-w-xs">
              <input style={{backgroundColor: '#E3EBF3'}}
                type="text"
                className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
                placeholder="Search for anything here..."
              /><FaSearch className="absolute top-2.5 right-5 text-gray-500" />
            </div>
            <div className="flex items-center">
              <FaGlobe className="text-gray-600 text-lg mx-4 cursor-pointer" />
              <FaBell className="text-gray-600 text-lg cursor-pointer" />
              <span className="text-sm text-gray-500 ml-4">Good Morning</span>
              <span className="text-sm text-gray-500 ml-2">14 May 2024</span>
            </div>
          </div>
        </div>
      );
    };

export default Navbar;
