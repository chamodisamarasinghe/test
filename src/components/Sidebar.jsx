import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaTasks,
    FaCalendarAlt,
    FaDochub,
    FaCartArrowDown,
    FaFigma,
    FaSlack,
    FaJira
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"Project tasks",
            icon:<FaTasks/>
        },
        {
            path:"/analytics",
            name:"Calender",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/comment",
            name:"Document",
            icon:<FaDochub/>
        },
        {
            path:"/product",
            name:"Store",
            icon:<FaCartArrowDown/>
        },
        {
            path:"/productList",
            name:"INTEGRATIONS",

        },

        {
            path:"/product",
            name:"Figma",
            icon:<FaFigma/>
        },

        {
            path:"/product",
            name:"Figma",
            icon:<FaSlack/>
        },

        {
            path:"/product",
            name:"Jira",
            icon:<FaJira/>
        },

        {
            path:"/productList",
            name:"ACCOUNT",

        },

        {
            path:"/product",
            name:"Settings",
            icon:<FaJira/>
        }





    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Dashcube</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;