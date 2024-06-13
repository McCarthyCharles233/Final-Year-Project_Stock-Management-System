import React from "react";
import { FaPlus, FaFirstAid, FaExclamationTriangle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Inventory = () => {
    return(
        <div className="p-10 bg-gray-100 h-full">
            <div className="flex justify-between">
                <div>
                    <h1 style={{fontSize: 24}} className=" font-bold">Inventory</h1>
                    <p>List of medicines available for sales</p>
                </div>
                <div>
                    <NavLink to='/admin/addnewitem'>
                        <button style={{backgroundColor: '#EDC268', color: '#FFFFFF'}} className="flex border p-3 rounded-md shadow-md"><FaPlus className="text-white px-1 mt-1" />
                            Add new item
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-blue-500">
                    <FaFirstAid className="text-4xl mt-4 text-blue-500" />
                    <h3 className="text-lg font-semibold mt-2">298</h3>
                    <p className=' font-medium'>Medicine Available</p>
                    <NavLink className=" bg-blue-100  text-sm w-full text-center mt-2 p-1 border-t-2 border-blue-500" to='/admin/medicinelist'>
                        <a href="#" >View Full List ››</a>
                    </NavLink>
                </div>
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-green-500">
                    <FaFirstAid className="text-4xl mt-4 text-green-500" />
                    <h3 className="text-lg font-semibold mt-2">02</h3>
                    <p className=" font-medium">Medicine Groups</p>
                    <a href="#" className=" bg-green-100 text-sm w-full text-center mt-2 p-1 border-t-2 border-green-500">View Detailed Report ››</a>
                </div>
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-red-500">
                    <FaExclamationTriangle className="text-4xl text-red-500 mt-4" />
                    <h3 className="text-lg font-semibold mt-2">01</h3>
                    <p>Medicine Shortage</p>
                    <a href="#" className=" bg-red-100 text-sm w-full text-center mt-2 p-1 border-t-2 border-red-500">Resolve Now ››</a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;