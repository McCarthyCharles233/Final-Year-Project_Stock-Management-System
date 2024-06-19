import React, { useState, useEffect } from 'react';

const AddUserModal = ({ isVisible, onClose, onSubmit, user }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('Pharmacist');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setRole(user.role);
      setId(user.id);
      setEmail(user.email);
      setPassword('');
      setConfirmPassword('');
    } else {
      setName('');
      setRole('Pharmacist');
      setId('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  }, [user]);

  if (!isVisible) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (!isValidPassword(password)) {
      setPasswordError('Password must be at least 8 characters long and contain a number and a special character.');
      return;
    }

    const newUser = { name, role, id, email, password };
    onSubmit(newUser);
  };

  const isValidPassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-1/3">
        <h2 className="text-2xl mb-4">{user ? 'Edit User' : 'Add New User'}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Staff Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="Pharmacist">Pharmacist</option>
              <option value="Cashier">Cashier</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
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
              required={!user}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required={!user}
            />
          </div>
          {passwordError && (
            <div className="mb-4 text-red-500">{passwordError}</div>
          )}
          <div className="flex justify-end">
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
              {user ? 'Save Changes' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserModal;
