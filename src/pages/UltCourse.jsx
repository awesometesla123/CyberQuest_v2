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
import Markdown from 'react-markdown';
import { ultimateCourseModules } from '../constants/index.js';

const UltCourse = () => {
  return (
    <div>
        <div className = "bg-primary"><NavBar/></div>
        <div className = "grid grid-cols-6">
            <div className = "col-start-1 col-end-2">
                <ul>
                    {ultimateCourseModules.map((module, index) => {
                        <div className = " border-5 border-gray-600">
                            
                        </div>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}


export default UltCourse