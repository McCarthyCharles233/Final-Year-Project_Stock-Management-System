import React, { useState, useEffect } from 'react';

const ManageUserModal = ({ isVisible, onClose, onSubmit, onDelete, user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setPassword('');
    }
  }, [user]);

  if (!isVisible) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, email, password };
    onSubmit(updatedUser);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-1/3">
        <h2 className="text-2xl mb-4">Manage User</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => onDelete(user.id)}
              className="mr-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete User
            </button>
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageUserModal;
