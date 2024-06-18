import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ManageUserModal = ({ user, onClose, onUpdate, onDelete }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [role, setRole] = useState(user ? user.role : '');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    }
  }, [user]);

  const handleUpdate = () => {
    const updatedUser = {
      id: user.id,
      name,
      email,
      role,
      password,
    };
    onUpdate(updatedUser);
    onClose();
  };

  const handleDelete = () => {
    onDelete(user.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-md shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{user ? 'Manage User' : 'Add New User'}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="border w-full p-2 mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="border w-full p-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <input
            type="text"
            className="border w-full p-2 mt-1"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="border w-full p-2 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-end space-x-4">
          {user && (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
          <button
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleUpdate}
          >
            {user ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </div>
  );
};

ManageUserModal.propTypes = {
  user: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ManageUserModal;
