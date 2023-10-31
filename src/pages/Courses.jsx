import React, { useState, useEffect } from 'react'
import NavBar from "../components/NavBar";
import SideNav from './components/SideNav';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import stars from '../assets/stars.png'
import { NavLink } from 'react-router-dom';

const Courses = () => {
  const [name, setName] = useState("User");
  const [signedIn, setStatus] = useState(false);
  useEffect(() => {
    if (localStorage.length > 1) {
      setName(localStorage.getItem("firstName"));
      setStatus(true);
    }
  }, []);

  return (
    <div className = "bg-primary">
      <div className = {`relative flex-col`}>
          <img src = {stars} className = "flex-1 w-[100%] left-0 right-0 top-0 bottom-0 absolute margin-auto z-[0] overflow-hidden bg-" />
      </div>
      <NavBar/>
      <div className = " p-10 grid grid-cols-6 font-poppins text-white" >
        <SideNav/>
        <div id = "courses" className = "col-start-2 col-end-6 w-full h-full font-poppins text-white text-center">
          <h1 className = "font-bold text-5xl">{name}'s <span style={{ color: '#75BDFF' }}>CyberQuest</span> Courses</h1>
          {signedIn ? <div id = "course cards" className = "text-white py-10 p-[100px] flex space-x-20">
            <Card id = "temp cb-basics" className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  CyberQuest Basics
                </Typography>
                <Typography>
                  Walk through the basics of how to interact with CyberQuest's virtual world.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Start</Button>
              </CardFooter>
            </Card>
            <Card id = "temp full" className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Ultimate Cybersecurity Course
                </Typography>
                <Typography>
                  Find out how to keep yourself safe on the internet and also learn fundamental cybersecurity principles with CyberQuest's industry-level expert approved curriculum.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button><NavLink to = "/courses/ultcourse">Start</NavLink></Button>
              </CardFooter>
            </Card>
          </div>: <div></div>}
        </div>
      </div>

      
    </div>
  )
}

export default Courses