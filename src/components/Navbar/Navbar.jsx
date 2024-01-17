import React, { useState } from "react";
import "./Navbar.scss";

import { TbGridDots } from "react-icons/tb";
import { CiMenuBurger } from "react-icons/ci";
import { MdTravelExplore } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
const Navbar = () => {
    const [active,setActive]=useState('navBar')
    //function to toggle navbar
    const showNav=()=>{
      setActive('navBar activeNavbar')
    }
       //function to close navbar
       const closeNav=()=>{
        setActive('navBar')
      }
  return (
    // ----------------navbar--------------
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1>
              <MdTravelExplore />
              Travel
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Package
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">
                Conact
              </a>
            </li>

            <button className="btn">
              <a href="">Book Now</a>
            </button>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <IoCloseCircleSharp className="icon" />
          </div>
          
        </div>
        <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
      </header>
    </section>
  );
};

export default Navbar;
