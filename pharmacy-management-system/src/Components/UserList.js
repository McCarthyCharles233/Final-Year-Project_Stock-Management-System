import React, { useState } from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';
import AddUserModal from './AddUserModal';
import ManageUserModal from './ManageUserModal';

const UserList = () => {
  const [users, setUsers] = useState([
    { name: 'John Doe', role: 'Pharmacist', id: '0001A', email: 'johndoe@example.com' }
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [manageModalVisible, setManageModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = () => {
    setCurrentUser(null);
    setModalVisible(true);
  };

  const handleManageUser = (user) => {
    setCurrentUser(user);
    setManageModalVisible(true);
  };

  const handleFormSubmit = (user) => {
    if (currentUser) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }
    setModalVisible(false);
  };

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    setManageModalVisible(false);
  };

  return (
    <div className="flex bg-gray-100 flex-col h-full p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 style={{ fontSize: 24 }} className="font-bold">
            <span className="text-gray-500">Application Settings</span>
            <span> › List of Users</span>
          </h1>
          <p>List of users available for management</p>
        </div>
        <button
          onClick={handleAddUser}
          style={{ backgroundColor: '#EDC268', color: '#FFFFFF' }}
          className="flex border p-3 rounded-md shadow-md"
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
              <th className="py-2 px-5 border-b-2">Actions</th>
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
                    onClick={() => handleManageUser(user)}
                    className="text-blue-500"
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
        <span>Showing 1 - {users.length} results of {users.length}</span>
        <div>
          <button className="p-2 border rounded-l">Previous</button>
          <button className="p-2 border-t border-b">Page 01</button>
          <button className="p-2 border rounded-r">Next</button>
        </div>
      </div>
      <AddUserModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleFormSubmit}
        user={currentUser}
      />
      <ManageUserModal
        isVisible={manageModalVisible}
        onClose={() => setManageModalVisible(false)}
        onSubmit={handleFormSubmit}
        onDelete={handleDeleteUser}
        user={currentUser}
      />
    </div>
  );
};

export default UserList;
