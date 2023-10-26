import React from 'react';
import fnaf from '../assets/fnaf.svg';
import { navLinks } from '../constants';

const NavBar = () => {
  return (
    <div className = 'z-10'>
      <nav className="w-full flex justify-around navbar py-6 bg-transparent">
        <div className = "z-[3] flex flex-row">
          <img src={fnaf} alt="logo" className="w-20 h-8 ml-4" />
          <a className = "text-white font-poppins font-bold text-lg" href = 'home'>CyberQuest</a>
        </div>
        
          <ul className="list-none flex self-center" style={{ flexDirection: 'row', padding: 0 }}>
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins cursor-pointer text-lg font-bold ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a className = "text-white" href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
      </nav>
    </div>
  );
};

export default NavBar;
