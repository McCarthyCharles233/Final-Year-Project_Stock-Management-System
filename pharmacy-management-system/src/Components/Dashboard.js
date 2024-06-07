import React from 'react';
import { FaFileAlt, FaDollarSign, FaPills, FaExclamationTriangle, FaCog, FaChartLine, FaUserFriends } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaFileAlt className="text-4xl text-green-500" />
          <h3 className="text-lg font-semibold mt-2">Good</h3>
          <p>Inventory Status</p>
          <button className="mt-4 bg-green-100 text-green-700 rounded-lg p-2">View Detailed Report</button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaDollarSign className="text-4xl text-yellow-500" />
          <h3 className="text-lg font-semibold mt-2">GHC. 55,875</h3>
          <p>Revenue: Jan 2024</p>
          <button className="mt-4 bg-yellow-100 text-yellow-700 rounded-lg p-2">View Detailed Report</button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaPills className="text-4xl text-blue-500" />
          <h3 className="text-lg font-semibold mt-2">298</h3>
          <p>Medicines Available</p>
          <button className="mt-4 bg-blue-100 text-blue-700 rounded-lg p-2">Visit Inventory</button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaExclamationTriangle className="text-4xl text-red-500" />
          <h3 className="text-lg font-semibold mt-2">01</h3>
          <p>Medicine Shortage</p>
          <button className="mt-4 bg-red-100 text-red-700 rounded-lg p-2">Resolve Now</button>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaCog className="text-4xl text-gray-500" />
          <h3 className="text-lg font-semibold mt-2">Inventory</h3>
          <p>Total no of Medicines: 298</p>
          <p>Medicine Groups: 24</p>
          <button className="mt-4 bg-gray-100 text-gray-700 rounded-lg p-2">Go to Configuration</button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaChartLine className="text-4xl text-gray-500" />
          <h3 className="text-lg font-semibold mt-2">Quick Report</h3>
          <p>Qty of Medicines Sold: 7,039</p>
          <p>Invoices Generated: 1,258</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaUserFriends className="text-4xl text-gray-500" />
          <h3 className="text-lg font-semibold mt-2">My Pharmacy</h3>
          <p>Total no of Suppliers: 04</p>
          <p>Total no of Users: 05</p>
          <button className="mt-4 bg-gray-100 text-gray-700 rounded-lg p-2">Go to User Management</button>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center">
          <FaUserFriends className="text-4xl text-gray-500" />
          <h3 className="text-lg font-semibold mt-2">Customers</h3>
          <p>Total no of Customers: 845</p>
          <p>Frequently bought Item: Charles McCarthy</p>
          <button className="mt-4 bg-gray-100 text-gray-700 rounded-lg p-2">Go to Customers Page</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
