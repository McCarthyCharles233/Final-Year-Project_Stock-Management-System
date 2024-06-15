import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const AppSettings = () => {
    return(
        <div className="p-10 bg-gray-100 h-full">
            <div>
                <div>
                    <h1 style={{fontSize: 24}} className=" font-bold">Application Settings</h1>
                    <p>User and access control management</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-yellow-500">
                    <FaUser className="text-4xl mt-4 text-yellow-500" />
                    <h3 className="text-lg font-semibold mt-2">01</h3>
                    <p className=' font-medium'>Staff</p>
                    <NavLink className=" bg-yellow-100  text-sm w-full text-center mt-2 p-1 border-t-2 border-yellow-500" to='/admin/users'>
                        <a href="#" >View all users ››</a>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AppSettings;