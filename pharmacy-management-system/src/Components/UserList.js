import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaSearch } from 'react-icons/fa';

const UserList = () => {
    return (
        <div className="flex bg-gray-100 flex-col h-full p-10">
        <div className="flex justify-between items-center">
          <div>
              <h1 style={{fontSize: 24}} className=" font-bold"> <span className='text-gray-500'>Application Settings</span><span> › List of Users</span> </h1>
              <p>List of medicines available for sales</p>
          </div>
          <NavLink to=''>
              <button style={{backgroundColor: '#EDC268', color: '#FFFFFF'}} className="flex border p-3 rounded-md shadow-md"><FaPlus className="text-white px-1 mt-1" />
                  Add New User
              </button>
          </NavLink>
        </div>
        <div className=" mt-5">
          <div className="relative flex-1 max-w-xs">
            <input style={{backgroundColor: '#E3EBF3'}}
              type="text"
              className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
              placeholder="Search Medicine Inventory..."
            /><FaSearch className="absolute top-2.5 right-5 text-gray-700" />
          </div>
        </div>
        <div className="overflow-y-auto mt-5">
          <table className=" w-full pl-5 bg-white border-2 border-gray-300">
            <thead>
              <tr className='text-left'>
                <th className="py-2 px-5 border-b-2">Staff Name</th>
                <th className="py-2 px-5 border-b-2">Role</th>
                <th className="py-2 px-5 border-b-2">ID</th>
                <th className="py-2 px-5 border-b-2">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-5 border-b">John Doe</td>
                <td className="py-2 px-5 border-b">Pharmacist</td>
                <td className="py-2 px-5 border-b">0001A</td>
                <td className="py-2 px-5 border-b">johndoe@example.com</td>
              </tr>
              {/* Repeat similar <tr> blocks for each medicine */}
            </tbody>
          </table>
        </div>
        <div className="p-4 flex justify-between items-center">
          <span>Showing 1 - 1 results of 1</span>
          <div>
            <button className="p-2 border rounded-l">Previous</button>
            <button className="p-2 border-t border-b">Page 01</button>
            <button className="p-2 border rounded-r">Next</button>
          </div>
        </div>
      </div>
    );
};

export default UserList;