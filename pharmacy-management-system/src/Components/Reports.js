import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Reports = () => {
    return(
        <div className="p-10 bg-gray-100 h-full">
            <div>
                <div>
                    <h1 style={{fontSize: 24}} className=" font-bold">Reports</h1>
                    <p>Overall reports related to the pharmacy</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-yellow-500">
                    <FaMoneyBill className="text-4xl mt-4 text-yellow-500" />
                    <h3 className="text-lg font-semibold mt-2">GHC 5,300,250.00</h3>
                    <p className=' font-medium'>Total Sales Report</p>
                    <NavLink className=" bg-yellow-100  text-sm w-full text-center mt-2 p-1 border-t-2 border-yellow-500" to=''>
                        <a href="#" >View Detailed Report ››</a>
                    </NavLink>
                </div>
                <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-green-500">
                    <FaMoneyBill className="text-4xl mt-4 text-green-500" />
                    <h3 className="text-lg font-semibold mt-2">523</h3>
                    <p className=" font-medium">Payment Report</p>
                    <a href="#" className=" bg-green-100 text-sm w-full text-center mt-2 p-1 border-t-2 border-green-500">View Detailed Report ››</a>
                </div>
            </div>
        </div>
    );
};

export default Reports;