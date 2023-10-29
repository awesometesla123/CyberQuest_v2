import React, { useEffect, useState } from 'react';
import styles from '../style';
import Meteor from '../assets/Meteor.png';
import { games } from '../constants/index.js'

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-[100px]`}>
      <div className={`flex-1 flex-col ${styles.flexStart} xl:px-0 sm:px-20  `}>
        <div id="phrase" className="z-[2] flex w-full">
        <h1 className="flex-1 font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-75px z-[7] ">
            Grow your <span style={{ color: '#75BDFF' }}>skills</span>, <br className="sm:block hidden" />
            protect your <span style={{ color: '#75BDFF' }}>future</span>
          </h1>
        </div>
        <p className = {`${styles.paragraph} max-w-[470px] mt-5 text-white py-[20px]`}>Introducing Cyber Quest, a non-profit organization dedicated to raising cybersecurity awareness and providing expert-approved cybersecurity education to all ages.</p>
        {games.map(game => 
          <a type = "button" key = {game.id} href = {game.url} className="h-[75px] w-[175px] bg-gradient-to-br from-blue-500 from-10% to-blue-900 text-white font-bold p-[25px] rounded-full z-[8] text-center md:text-[20px] text-[15px]">
          {game.title}        </a>
        )}
      </div>
      <div className = 'md:ml-[200px] mt-[-150px]'>
        <img src = {Meteor} alt="cyberquest" className = "flex-1 z-[2] relative  object-none"/>
      </div>
    </section>
  );
};

export default Hero;
