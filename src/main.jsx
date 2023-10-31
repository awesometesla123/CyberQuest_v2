import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Courses from "./pages/Courses.jsx"
import UltCourse from './pages/UltCourse.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <GoogleOAuthProvider clientId = "1042953571357-a0cmhb9v9catrqdrj293jroj5qfp0m1p.apps.googleusercontent.com">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<App/>} />
            <Route exact path='/courses' element={<Courses/>} />
            <Route exact path = '/courses/ultcourse' element = {<UltCourse/>}></Route>
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </React.StrictMode>
)
