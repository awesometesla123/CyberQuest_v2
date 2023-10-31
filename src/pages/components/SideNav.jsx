import React from 'react'
import { useState, useEffect } from "react";
import { googleLogout } from "@react-oauth/google";

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
        <div id = "nav" className = "col-start-1 col-end-2 bg-course font-bold space-y-10 rounded-xl p-10 " style = {{height: "100vh"}}>
            <div className="flex items-center p-2 space-x-4">
                <img src={picture} alt="pfp" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                <h2 className="text-lg font-semibold">{name
                }</h2>
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
                    <a onClick = {() => {
                    googleLogout();
                    localStorage.clear();
                    window.location.reload();
                    }} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                    {/* svg insert */}
                    <span>Logout</span>
                    </a>
                </li>
                </ul>
            </div>
            </div>
    )
}

export default SideNav