import React from 'react'
import { useState, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
  } from "@heroicons/react/24/solid";
  import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";

const SideNav = () => {
    const [name, setName] = useState("New User");
    const [picture, setPic] = useState("");

    useEffect(() => {
        console.log(localStorage.getItem("pfp"));
        console.log(localStorage.getItem("name"));
        if (localStorage.length > 1) {
            setName(localStorage.getItem("name"));
            setPic(localStorage.getItem("pfp"));
        }
    }, []);
    return (
        <div id = "nav" className = "z-[2] col-start-1 col-end-2 bg-course font-bold space-y-10 rounded-xl p-10" style = {{height: "100vh"}}>
            <Typography variant="h5" color="white">
                    Navigation
            </Typography>
            <div className="flex items-center p-2 space-x-4">
                <img src={picture} alt="pfp" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                <p className="text-lg font-semibold">{name
                }</p>
                <span className="flex items-center space-x-1">
                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                </span>
                </div>
            </div>
            <div className="divide-y divide-gray-700">
                <List className = "text-white font-bold font-poppins">
                    <ListItem>
                    <ListItemPrefix>
                        <PresentationChartBarIcon className="h-5 w-5" />
                    </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Profile
                    </ListItem>
                    <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                    </ListItem>
                    <ListItem onClick = {() => {
                        googleLogout();
                        localStorage.clear();
                        window.location.reload();
                    }}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </div>
            </div>
    )
}

export default SideNav

{/* <a onClick = {() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                    }} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md"> */}