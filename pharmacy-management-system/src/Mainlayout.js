import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const MainLayout = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
