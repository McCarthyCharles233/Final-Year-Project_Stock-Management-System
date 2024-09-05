import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login_bg from './img/login_bg.jpg';
import lock from './img/lock.png';
import user from './img/user.png';

const LoginPharmacist = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // Match the username with the user ID stored in localStorage
    const userFound = users.find(user => user.id === username && user.password === password);

    if (userFound && role === 'pharmacist' && userFound.role === 'pharmacist') {
      localStorage.setItem('role', 'pharmacist'); // Save pharmacist role in localStorage
      localStorage.setItem('token', 'dummy_token'); // Set a token for authentication
      navigate(`/pharmacist/dashboard`);
    } else {
      setError('Incorrect credentials');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${login_bg})` }} className="flex justify-center items-center min-h-screen">
      <div className="p-10">
        <form onSubmit={handleLogin} className="space-y-4">
          <div style={{ width: '300px' }} className="relative">
            <img src={user} alt="User Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-white rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-white placeholder-white bg-transparent"
            >
              <option value="" disabled className="text-gray-700 uppercase">ROLE</option>
              <option value="pharmacist" className="text-black">Pharmacist</option>
            </select>
          </div>
          <div style={{ width: '300px' }} className="relative">
            <img src={user} alt="User Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="USERNAME (ID)"
              className="block w-full pl-10 pr-3 py-2 border border-white rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-white placeholder-white bg-transparent"
            />
          </div>
          <div style={{ width: '300px' }} className="relative">
            <img src={lock} alt="Lock Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              className="block w-full pl-10 pr-3 py-2 border border-white rounded-md shadow-sm focus:ring-white focus:border-white sm:text-sm text-white placeholder-white bg-transparent"
            />
          </div>
          <button style={{ backgroundColor: '#EDC268', color: '#254D7C', marginTop: '2rem', width: '300px' }} type="submit" className="w-full py-1 px-4 rounded-md shadow-lg">LOGIN</button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <div className="mt-4 text-end">
          <a href="#" className="text-sm text-white">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPharmacist;
