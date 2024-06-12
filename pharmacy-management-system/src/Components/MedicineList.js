import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const MedicineList = () => {
  return (
    <div className="flex bg-gray-100 flex-col h-full p-10">
      <div className="flex justify-between items-center">
        <div>
            <h1 style={{fontSize: 24}} className=" font-bold"> <span className='text-gray-500'>Inventory</span><span> › List of Medicines</span> </h1>
            <p>List of medicines available for sales</p>
        </div>
        <button style={{backgroundColor: '#EDC268', color: '#FFFFFF'}} className="flex border p-3 rounded-md shadow-md"><FaPlus className="text-white px-1 mt-1" />
            Add new item
        </button>
      </div>
      <div className="flex justify-between mt-5">
        <div className="relative flex-1 max-w-xs">
          <input style={{backgroundColor: '#E3EBF3'}}
            type="text"
            className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
            placeholder="Search Medicine Inventory..."
          /><FaSearch className="absolute top-2.5 right-5 text-gray-700" />
        </div>
        <select className="p-2 border rounded">
          <option>- Select Group -</option>
          <option>Group 1</option>
          <option>Group 2</option>
        </select>
      </div>
      <div className="overflow-y-auto mt-5">
        <table className=" w-full pl-5 bg-white border-2 border-gray-300">
          <thead>
            <tr className='text-left'>
              <th className="py-2 px-5 border-b-2">Medicine Name</th>
              <th className="py-2 px-5 border-b-2">Medicine ID</th>
              <th className="py-2 px-5 border-b-2">Group Name</th>
              <th className="py-2 px-5 border-b-2">Quantity</th>
              <th className="py-2 px-5 border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace the below rows with your actual data */}
            <tr>
              <td className="py-2 px-5 border-b">Augmentin 625 Duo Tablet</td>
              <td className="py-2 px-5 border-b">D06ID232435454</td>
              <td className="py-2 px-5 border-b">Generic Medicine</td>
              <td className="py-2 px-5 border-b">350</td>
              <td className="py-2 px-5 border-b">
                <NavLink to='/admin/medicinedetails'>
                    <button className="text-blue-500">View Full Detail</button>
                </NavLink>
              </td>
            </tr>
            {/* Repeat similar <tr> blocks for each medicine */}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span>Showing 1 - 8 results of 298</span>
        <div>
          <button className="p-2 border rounded-l">Previous</button>
          <button className="p-2 border-t border-b">Page 01</button>
          <button className="p-2 border rounded-r">Next</button>
        </div>
      </div>
    </div>
  );
};

export default MedicineList;
