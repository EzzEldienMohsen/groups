import React from 'react';
import { LargeNavBar, SmallNavBar } from '../subComponents';
import { FaMoon } from 'react-icons/fa';
import { CiSun } from "react-icons/ci";


const Header = ({toggleTheme,isDark}) => {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-xl border-b-2 border-blue">
      {/* the logo  */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl text-blue-700 tracking-wide rounded-full shadow-md bg-[#ffffffd7] p-3 motion">
        ED
      </h1>
      {/* NAVBAR FOR SMALL SCREENS */}
      <SmallNavBar />
      {/* NAVBAR FOR BIGGER SCREENS */}
      <LargeNavBar />
      {/* THEME BUTTON */}
      <button
        onClick={() => {
          toggleTheme();
        }}
      >
        {isDark ? (
          <FaMoon className="text-3xl md:text-5xl lg:text-5xl" />
        ) : (
          <CiSun className="text-3xl md:text-5xl lg:text-5xl" />
        )}
      </button>
    </div>
  );
};

export default Header;
