import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";

const MedicineGroup = () => {
    return(
        <div className="flex bg-gray-100 flex-col h-full p-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 style={{fontSize: 24}} className=" font-bold"> <span className='text-gray-500'>Inventory</span><span> › Medicine Groups (02)</span> </h1>
                    <p>List of medicine groups</p>
                </div>
                <NavLink to=''>
                    <button style={{backgroundColor: '#EDC268', color: '#FFFFFF'}} className="flex border p-3 rounded-md shadow-md"><FaPlus className="text-white px-1 mt-1" />
                        Add New Group
                    </button>
                </NavLink>
            </div>
            <div className="flex justify-between mt-3">
                <div className="relative flex-1 max-w-xs">
                <input style={{backgroundColor: '#E3EBF3'}}
                    type="text"
                    className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
                    placeholder="Search in Medicine Groups"
                /><FaSearch className="absolute top-2.5 right-5 text-gray-700" />
                </div>
            </div>
            <table className=" w-full pl-5 bg-white border-2 border-gray-300 mt-5">
                <thead>
                  <tr className='text-left'>
                    <th className="py-2 px-5 border-b-2">Group Name</th>
                    <th className="py-2 px-5 border-b-2">No Of Medicines</th>
                    <th className="py-2 px-5 border-b-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-5 border-b">Generic Medicine</td>
                    <td className="py-2 px-5 border-b">02</td>
                    <td className="py-2 px-5 border-b">
                      <NavLink to=''>
                          <button className="text-blue-500">View Full Detail ››</button>
                      </NavLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-5 border-b">Diabetes</td>
                    <td className="py-2 px-5 border-b">32</td>
                    <td className="py-2 px-5 border-b">
                      <NavLink to=''>
                          <button className="text-blue-500">View Full Detail ››</button>
                      </NavLink>
                    </td>
                  </tr>
                  {/* Repeat similar <tr> blocks for each medicine */}
                </tbody>
            </table>
        </div>
    );
};

export default MedicineGroup;