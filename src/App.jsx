import React, { useState, useEffect } from 'react'
import Home from './Home.jsx';
import Courses from './pages/Courses.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const App = () => {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/courses' element={<Courses/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// className = {`${styles.boxWidth}`}

export default App
