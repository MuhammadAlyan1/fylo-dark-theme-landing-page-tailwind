import React from 'react';
import fyloLogo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-3 md:p-6">
      <div className="max-w-[100px]">
        <img src={fyloLogo} alt="fylo" />
      </div>
      <div className="text-slate-200">
        <ul className="flex gap-3 md:gap-5">
          <li className="hover:cursor-pointer hover:text-white hover:underline">
            Features
          </li>
          <li className="hover:cursor-pointer hover:text-white hover:underline">
            Team
          </li>
          <li className="hover:cursor-pointer hover:text-white hover:underline">
            Sign In
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
