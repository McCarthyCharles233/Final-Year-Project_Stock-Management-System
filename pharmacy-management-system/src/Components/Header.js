import React, { useEffect } from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentTime, 'dd MMM yyyy');
  const formattedTime = format(currentTime, 'HH:mm:ss');

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
              <span className="text-sm text-gray-500 ml-4">{formattedTime}</span>
              <span className="text-sm text-gray-500 ml-2">{formattedDate}</span>
            </div>
          </div>
        </div>
      );
    };

export default Navbar;
