import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-background"></div>
      <Header />
      <main className="min-h-screen container pl-10">
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10">
        Made with ❤️ by Anshita
      </footer>
    </div>
  );
};

export default AppLayout;
