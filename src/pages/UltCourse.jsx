import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar.jsx';
import styles from '../markdown.module.css';
import { Typography } from '@material-tailwind/react';
import Markdown from 'markdown-to-jsx';
import { ultimateCourseModules } from '../constants/index.js';
import '../index.css';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Router, Route, NavLink } from 'react-router-dom';

const Code = ({children}) => {
  return (
    <div >
      <SyntaxHighlighter style = {materialDark}>
        {children} 
      </SyntaxHighlighter>
    </div>
  );
}

const UltCourse = () => {
  const [social, setSocial] = useState("");
  useEffect(() => {
    import("../constants/content/UltimateCourse/SocialEngineering.md")
      .then(res => {
        fetch(res.default) 
          .then(res => res.text())
          .then(res => setSocial(res))
      })

    // OTHER MDS
  }, []);

  return (
    <div>
      <div className="bg-primary">
        <NavBar />
      </div>
      <div className="grid grid-cols-8">
        <div className="col-start-1 col-end-3 border-[2px] border-gray-900 h-[100vh]">
          <ul>
            <Typography className="p-5 text-black xl:text-[20px] text-[15px] font-bold">
              Course Navigation
            </Typography>
            {ultimateCourseModules.map((module, index) => (
              <NavLink to = {module.link} key={module.id}>
                <li
                  onClick={() => console.log('Clicked:', module.title)}
                  className={`p-10 xl:h-[100px] border border-gray-600 font-poppins ${
                    index === ultimateCourseModules.length - 1
                      ? 'h-[100vw]'
                      : 'h-[75px]'
                  } hover:bg-gray-100`}
                >
                  <div className="flex items-center font-bold xl:text-[20px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mr-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                      />
                    </svg>
                    <div>
                      <p>
                        Unit {module.moduleNum}: {module.title}
                      </p>
                      <p></p>
                    </div>
                  </div>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={
                  <Markdown options = {{
                    overrides: {
                      Code : {
                        component: Code
                      }
                    }
                  }} className = "markdown p-10 col-start-3 col-end-8 font-poppins">{social}</Markdown>} />
                <Route path='/networking' element={
                    <Markdown options = {{
                      overrides: {
                        Code : {
                          component: Code
                        }
                      }
                    }} className = "markdown p-10 col-start-3 col-end-8 font-poppins">{content}</Markdown>
                } />
                <Route path='/contact' element={<Contact />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>

      </div>
    </div>
  );
};

export default UltCourse;
