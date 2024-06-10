import React from 'react'
import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const Home = () => {
  let theme = JSON.parse(localStorage.getItem('theme') || 'false');

  const [isDark, setIsDark] = React.useState(theme);
  const toggleTheme = () => {
    setIsDark(() => !isDark);
    localStorage.setItem('theme', JSON.stringify(!isDark));
  };
  return (
    <div data-theme={isDark?"luxury":"light"}>
      <Header toggleTheme={toggleTheme} isDark={isDark}/>
      <Outlet />
    </div>
  );
}

export default Home