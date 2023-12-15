import React,  { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { IoMdNotificationsOutline } from "react-icons/io";

function navbar() {
  
    const [selectedTab, setSelectedTab] = useState('Cargo Orders');

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };


  return (
    <>
     
     <nav className="navbar">
        <ul>
            <li><SlArrowLeft className='up icon'/></li>
            <li><h4 className='up'>Cargo Orders</h4></li>
            <li><IoMdNotificationsOutline className='up icon notification'/></li>
        </ul>
        <ul> 
            <li><a href="#">Upcoming</a></li>
            <li><a href="#">Completed</a></li>
            <li><a href="#">Past</a></li>
        </ul>
    </nav>
     
    </>
  )
}

export default navbar
