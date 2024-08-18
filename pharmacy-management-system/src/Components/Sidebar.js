import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaSignOutAlt, FaHome, FaClipboardList, FaChartBar, FaCog, FaEnvelope, FaBell, FaCommentDots, FaWrench, FaVirus, FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa';
/* import logo from './img/logo.png'; */
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/login', { replace: true }); // Redirect to login page
    window.location.reload(); // Reload the page
  };

  return (
    <div style={{backgroundColor: '#1E497D'}} className=" w-72 h-full bg-blue-900 text-white flex flex-col justify-between">
      <div>
        <div style={{backgroundColor: '#1D242E'}}  className=" w-72 flex items-center justify-center p-2">
            {/* <img src={logo} alt="Logo" className="w-10 h-10 mr-3" /> */}
            <h1 className="text-lg font-bold text-white">CLINIC PHARMA</h1>
        </div>
        <div className="flex items-center px-4 py-6">
          {/* <img src={logo} alt="Profile" className=" w-10 h-10" /> */}
          <div className="ml-3">
            <div className="text-lg font-semibold">Admin 1</div>
            <div className="text-sm text-gray-400">Super Admin</div>
          </div>
        </div>
        <div className=" pr-2">
          <nav className="flex flex-col">
            <NavLink to='/admin/dashboard' className="flex items-center space-x-3 py-3 p-5">
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
            <div>
              <div
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => setInventoryOpen(!inventoryOpen)}
              >
                <div className="flex items-center space-x-3 py-0 p-5">
                  <FaClipboardList />
                  <NavLink to='/admin/inventory'>
                    <span>Inventory</span>
                  </NavLink> 
                </div>
                {inventoryOpen ? <FaChevronUp/> : <FaChevronDown />}
              </div>
              {inventoryOpen && (
                <div style={{backgroundColor: '#1D242E'}} className="flex flex-col space-y-2 pl-8">
                  <NavLink className="py-3 px-5" to='/admin/medicinelist'>
                    <span>List of Medicines</span>
                  </NavLink>
                  <NavLink className="py-3 px-5" to='/admin/medicinegroup'>
                    <span href="#">Medicine Groups</span>
                  </NavLink>
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => setReportsOpen(!reportsOpen)}
              >
                <div className="flex items-center space-x-3 py-0 p-5">
                  <FaChartBar />
                  <NavLink to='/admin/reports'>
                    <span>Reports</span>
                  </NavLink>
                  
                </div>
                {reportsOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {reportsOpen && (
                <div style={{backgroundColor: '#1D242E'}} className="flex flex-col space-y-2 pl-8">
                  <a href="#" className="py-3 px-5">Sales Report</a>
                  <a href="#" className="py-3 px-5">Payment Report</a>
                </div>
              )}
            </div>
            <div>
              <div
                className="flex items-center justify-between py-3 cursor-pointer"
                onClick={() => setContactOpen(!contactOpen)}
              >
                <div className="flex items-center space-x-3 py-0 p-5">
                  <FaEnvelope />
                  <span>Contact Management</span>
                </div>
                {contactOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {contactOpen && (
                <div style={{backgroundColor: '#1D242E'}} className="flex flex-col space-y-2 pl-8">
                  <a href="#" className="py-3 px-5">Sub-item 1</a>
                  <a href="#" className="py-3 px-5">Sub-item 2</a>
                </div>
              )}
            </div>
            <a href="#" className="flex items-center space-x-3 py-3 p-5">
              <FaBell />
              <span>Notifications</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-3 p-5">
              <FaCommentDots />
              <span>Chat with Visitors</span>
            </a>
            <hr className='text-white my-6'></hr>
            <NavLink className="flex items-center space-x-3 py-3 p-5" to='/admin/appsettings'>
                <FaCog />
                <span>Application Settings</span>
            </NavLink>
            <a href="#" className="flex items-center space-x-3 py-3 p-5">
              <FaVirus />
              <span>Covid-19</span>
            </a>
            <a href="#" className="flex items-center space-x-3 py-3 p-5">
              <FaQuestionCircle />
              <span>Get Technical Help</span>
            </a>
          </nav>
        </div>
      </div>
      <div className="px-4 py-6">
        <a href="#" className="flex items-center space-x-3 py-3 p-5">
          <FaUser />
          <span>My Profile</span>
        </a>
        <button onClick={handleLogout}  className="flex items-center space-x-3 py-3 p-5">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
