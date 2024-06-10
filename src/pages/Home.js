import React from 'react'
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div data-theme="luxury">
      <Header />
      <Outlet />
    </div>
  );
}

export default Home