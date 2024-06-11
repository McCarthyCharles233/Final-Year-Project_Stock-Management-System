import React from 'react';
import { FaFileAlt, FaDollarSign, FaPills, FaExclamationTriangle, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='bg-white'>
        <div className=" p-10 bg-gray-100">
            <div className=' mb-5'>
                <p className=' font-bold text-xl'>Dashboard</p>
                <p>A quick data overview of the inventory.</p>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-green-500">
              <FaFileAlt className="text-4xl text-green-500 mt-4" />
              <h3 className="text-lg font-semibold mt-2">Good</h3>
              <p className=''>Inventory Status</p>
              <a className=" bg-green-100 text-green-700 w-full text-center mt-2 p-1 border-t-2 border-green-500">View Detailed Report ››</a>
            </div>
            <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-yellow-500">
              <FaDollarSign className="text-4xl text-yellow-500 mt-4" />
              <h3 className="text-lg font-semibold mt-2">GHC. 55,875</h3>
              <p>Revenue: Jan 2024</p>
              <button className=" bg-yellow-100 text-yellow-700 w-full text-center mt-2 p-1 border-t-2 border-yellow-500">View Detailed Report ››</button>
            </div>
            <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-blue-500">
              <FaPills className="text-4xl text-blue-500 mt-4" />
              <h3 className="text-lg font-semibold mt-2">298</h3>
              <p>Medicines Available</p>
              <NavLink className=" bg-blue-100 text-blue-700 w-full text-center mt-2 p-1 border-t-2 border-blue-500" to='/admin/medicinelist'>
                <button >Visit Inventory ››</button>
              </NavLink>
            </div>
            <div className="bg-white shadow-sm rounded-sm flex flex-col items-center h-max border-2 border-red-500">
              <FaExclamationTriangle className="text-4xl text-red-500 mt-4" />
              <h3 className="text-lg font-semibold mt-2">01</h3>
              <p>Medicine Shortage</p>
              <button className=" bg-red-100 text-red-700 w-full text-center mt-2 p-1 border-t-2 border-red-500">Resolve Now ››</button>
            </div>
          </div>
        </div>
        <div className=" p-10 mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
                <div className='flex justify-between border-b-2 p-1 px-5'>
                    <h3 className="text-lg font-semibold">Inventory</h3>
                    <a href='#'>Go to Configuration ››</a>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>298</p>
                        <p className=' font-medium'>Total no of Medicines</p>
                    </div>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>24</p>
                        <p className=' font-medium'>Medicine Groups</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
                <div className='flex justify-between border-b-2 p-1 px-5'>
                    <h3 className="text-lg font-semibold">Reports</h3>
                    <select>
                        <option>Jan 2024</option>
                        <option>Feb 2024</option>
                        <option>March 2024</option>
                        <option>April 2024</option>
                        <option>May 2024</option>
                        <option>June 2024</option>
                        <option>July 2024</option>
                        <option>Aug 2024</option>
                        <option>Sep 2024</option>
                        <option>Oct 2024</option>
                        <option>Nov 2024</option>
                        <option>Dec 2024</option>
                    </select>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>7,039</p>
                        <p className=' font-medium'>Qty of Medicines Sold</p>
                    </div>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>1,258</p>
                        <p className=' font-medium'>Invoices Generated</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
                <div className='flex justify-between border-b-2 p-1 px-5'>
                    <h3 className="text-lg font-semibold">My Pharmacy</h3>
                    <a href='#' className="">Go to User Management ››</a>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>04</p>
                        <p className=' font-medium'>Total Suppliers</p>
                    </div>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>05</p>
                        <p className=' font-medium'>Total no of Users</p>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-sm rounded-lg flex flex-col border-2">
                <div className='flex justify-between border-b-2 p-1 px-5'>
                    <h3 className="text-lg font-semibold">Customers</h3>
                    <a href='#' className="">Go to Customers Page ››</a>
                </div>
                <div className='flex justify-between p-4'>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>845</p>
                        <p className=' font-medium'>Total no of Customers</p>
                    </div>
                    <div className='p-2'>
                        <p className='font-bold text-xl'>Aspirin</p>
                        <p className=' font-medium'>Frequently Bought Item</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Dashboard;
