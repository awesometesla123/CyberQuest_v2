import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactMarkdown from 'react-markdown';
import { ultimateCourseModules } from '../constants/index.js';

const UltCourse = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("SocialEngineering.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);
  return (
    <div>
        <div className = "bg-primary"><NavBar/></div>
        <div className = "grid grid-cols-8">
            <div className = "col-start-1 col-end-3 border-[2px] border-gray-900 h-[100vh]">
                <ul>
                  <Typography className = "p-5 text-black xl:text-[20px] text-[15px] font-bold">Course Navigation</Typography>
                  {ultimateCourseModules.map((module, index) => (
                    <li key={module.id} onClick = {console.log("skjd")} className={` p-10 xl:h-[100px] border border-gray-600 font-poppins ${index === ultimateCourseModules.length - 1 ? 'h-[100vw]' : 'h-[75px]'} hover:bg-gray-100`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                      </svg>
                      <h1> Unit {module.moduleNum}: {module.title}</h1>
                      <p></p>
                    </li>
                  ))}
                </ul>
            </div>
            <div id = "md">
              <ReactMarkdown children = {content}></ReactMarkdown>
            </div>
        </div>
    </div>
  )
}


export default UltCourse