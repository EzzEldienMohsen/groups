import React from 'react'
import { pages } from '../assets';
import { Link } from 'react-router-dom';
const LargeNavBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center">
      <ul>
        {pages.map((li) => {
          return (
            <Link
              key={li.text}
              className="mr-4 hover:text-secondary hover:underline text-lg lg:text-xl capitalize"
            >
              {li.text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default LargeNavBar