import React from 'react'
import { FaBars } from 'react-icons/fa6';
import { pages } from './../assets/index';
import { Link } from 'react-router-dom';

const SmallNavBar = () => {
  return (
    <div className="dropdown dropdown-end md:hidden">
      <div tabIndex={0} role="button" className="btn m-1">
        <FaBars className="text-primary text-2xl" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[60vw]"
      >
        {pages.map((li) => {
          return (
            <Link
              key={li.text}
              className="mt-1 hover:text-secondary hover:underline capitalize"
            >
              {li.text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default SmallNavBar