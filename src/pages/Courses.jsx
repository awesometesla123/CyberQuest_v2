import { useState, useEffect } from "react";
import React from 'react'
import NavBar from "../components/NavBar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const Courses = () => {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://apis.google.com/js/platform.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  function init() {
    gapi.load('auth2', function() {
      /* Ready. Make a call to gapi.auth2.init or some other API */
    });
  }

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div className = "bg-primary">
      <NavBar/>
      <div className = " p-10 grid grid-cols-6 font-poppins text-white" >
        <div id = "nav" className = "col-start-1 col-end-2 bg-course font-bold space-y-10 rounded-xl p-10 " style = {{height: "100vh"}}>
          <div className="flex items-center p-2 space-x-4">
            <img src="" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
            <div>
              <h2 className="text-lg font-semibold">New User</h2>
              <span className="flex items-center space-x-1">
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
              </span>
            </div>
          </div>
          <div className="divide-y divide-gray-700">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="dark:bg-gray-800 dark:text-gray-50">
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Chat</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Orders</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Wishlist</span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 pb-2 space-y-1 text-sm">
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                  {/* svg insert */}
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id = "courses" className = "col-start-2 col-end-6 w-full h-full font-poppins text-white text-center">
          <h1 className = "font-bold text-5xl">Your <span style={{ color: '#75BDFF' }}>CyberQuest</span> Courses</h1>
          <div id = "course cards" className = "text-white py-10 p-[100px] flex space-x-20">
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
                <Button>Start</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Courses