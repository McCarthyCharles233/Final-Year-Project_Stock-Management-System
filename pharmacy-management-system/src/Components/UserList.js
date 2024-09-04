import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaSearch } from 'react-icons/fa';
import AddUserModal from './AddUserModal';
import ManageUserModal from './ManageUserModal';
import api from '../utils/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    
    if (storedRole !== 'admin') {
      navigate('/not-authorized'); // Redirect non-admin users
    } else {
      fetchUsers(); // Only fetch users if the role is 'admin'
    }
  }, []);  

  const fetchUsers = async () => {
    try {
      const res = await api.get('/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddUser = async (newUser) => {
    try {
      await api.post('/api/users', newUser);
      fetchUsers();
      setIsAddModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateUser = async (updatedUser) => {
    try {
      await api.put(`/api/users/${updatedUser.id}`, updatedUser);
      fetchUsers();
      setIsManageModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await api.delete(`/api/users/${userId}`);
      fetchUsers();
      setIsManageModalOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const openManageModal = (user) => {
    setSelectedUser(user);
    setIsManageModalOpen(true);
  };

  const closeManageModal = () => {
    setIsManageModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex bg-gray-100 flex-col h-full p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 style={{ fontSize: 24 }} className="font-bold">
            <span className="text-gray-500">Application Settings</span>
            <span> › List of Users</span>
          </h1>
          <p>List of users available</p>
        </div>
        <button
          style={{ backgroundColor: '#EDC268', color: '#FFFFFF' }}
          className="flex border p-3 rounded-md shadow-md"
          onClick={openAddModal}
        >
          <FaPlus className="text-white px-1 mt-1" />
          Add New User
        </button>
      </div>
      <div className="mt-5">
        <div className="relative flex-1 max-w-xs">
          <input
            style={{ backgroundColor: '#E3EBF3' }}
            type="text"
            className="border rounded-sm py-2 px-4 pl-10 w-full text-black"
            placeholder="Search User Inventory..."
          />
          <FaSearch className="absolute top-2.5 right-5 text-gray-700" />
        </div>
      </div>
      <div className="overflow-y-auto mt-5">
        <table className="w-full pl-5 bg-white border-2 border-gray-300">
          <thead>
            <tr className="text-left">
              <th className="py-2 px-5 border-b-2">Staff Name</th>
              <th className="py-2 px-5 border-b-2">Role</th>
              <th className="py-2 px-5 border-b-2">ID</th>
              <th className="py-2 px-5 border-b-2">Email</th>
              <th className="py-2 px-5 border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-5 border-b">{user.name}</td>
                <td className="py-2 px-5 border-b">{user.role}</td>
                <td className="py-2 px-5 border-b">{user.id}</td>
                <td className="py-2 px-5 border-b">{user.email}</td>
                <td className="py-2 px-5 border-b">
                  <button 
                    className="text-blue-500 hover:underline"
                    onClick={() => openManageModal(user)}
                  >
                    Manage User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 flex justify-between items-center">
        <span>Showing {users.length} results</span>
        <div>
          <button className="p-2 border rounded-l">Previous</button>
          <button className="p-2 border-t border-b">Page 01</button>
          <button className="p-2 border rounded-r">Next</button>
        </div>
      </div>
      {isAddModalOpen && (
        <AddUserModal
          isVisible={isAddModalOpen}
          onClose={closeAddModal}
          onSubmit={handleAddUser}
          user={null}
        />
      )}
      {isManageModalOpen && (
        <ManageUserModal
          user={selectedUser}
          onClose={closeManageModal}
          onUpdate={handleUpdateUser}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default UserList;
