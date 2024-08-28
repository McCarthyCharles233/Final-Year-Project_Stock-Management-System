import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
/* import login_bg from './img/login_bg.jpg'; */
import lock from './img/lock.png';
import user from './img/user.png';

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        role,
        username,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', role); // Store role for later use

        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else if (role === 'pharmacist') {
          navigate('/pharmacist/dashboard');
        } else {
          navigate('/unauthorized');
        }
      } else {
        setError('Incorrect credentials');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${login_bg})` }} className="flex justify-center items-center min-h-screen">
      <div className="p-10">
        {/* <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-24 h-24" />
        </div> */}
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
              <option value="admin" className="text-black">Admin</option>
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
              placeholder="USERNAME"
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

export default Login;
