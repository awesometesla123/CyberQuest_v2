import React, { useState, useEffect } from 'react';
import fnaf from '../assets/fnaf.svg';
import { navLinks } from '../constants';
import { GoogleLogin } from '@react-oauth/google';
import { NavLink, Route } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const NavBar = () => {
  
  return (
    <nav className="w-full flex justify-around navbar py-6 bg-transparent">
      <div className = "z-[3] flex flex-row">
        <img src={fnaf} alt="logo" className="w-20 h-8 ml-4" />
        <NavLink to = "/" className = "text-white font-poppins font-bold text-lg"> CyberQuest</NavLink>
      </div>
    
      <ul className="z-[5] list-none flex self-center" style={{ flexDirection: 'row', padding: 0 }}>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`px-5 font-poppins cursor-pointer text-lg font-bold ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <NavLink to = {`${nav.id}`} className = "text-white">{nav.title}</NavLink>
          </li>
        ))}
        <GoogleLogin onSuccess={credentialResponse => {
          var credentialResponseDecoded = jwtDecode(credentialResponse.credential)
          console.log(credentialResponseDecoded);
        }}
        onError = {credentialResponse => {
          console.log('login failed');
        }}></GoogleLogin>
      </ul>
    </nav>
  );
};



export default NavBar;
