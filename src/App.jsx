import React, { useState, useEffect } from 'react'
import styles from "./style.js"
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import OfferedInfo from './components/OfferedInfo.jsx';
import './index.css';
import stars from './assets/stars.png'
import clouds from './assets/clouds.png';

export const App = () => {

  return (
    <div className = "w-full overflow-hidden scrollbar-hide">
        <div className = {` bg-primary ${styles.paddingX} ${styles.flexCenter} z-10`}>
          <div className = {`${styles.boxWidth}`}>
            <NavBar/>
          </div>
        </div>
  
      <div className = {` bg-gradient-to-b z-[5] from-primary  to-cloudbg ${styles.flexStart}`}>
        <div className = {`relative flex-col`}>
          <img src = {stars} className = "flex-1 w-[100%] left-0 right-0 top-0 bottom-0 absolute margin-auto z-[0] overflow-hidden" />
          <Hero />
        </div>
      </div>
  
      <div className = {`relative bg-content flex justify-center `}>
        <img src = {clouds} className = 'absolute  xl:mt-[-4px] mt-[-2px]' ></img>
      </div>
  
      <div className = {`bg-content ${styles.flexStart}`}>
        <div className = 'bg-content'>
          <OfferedInfo/>
        </div>
      </div>
    </div>
  );
}

// className = {`${styles.boxWidth}`}

export default App
