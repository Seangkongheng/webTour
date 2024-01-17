import React, { useEffect } from "react";
import "./Home.css";
import "./Home.scss";
import { TbAppsFilled } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import Video from "../../Assets/video.mp4";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
// hok scroll anmiation
useEffect(()=>{
  Aos.init({duration:2000})
},[])


  
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={Video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search you holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
        <div className="destionationInput">
            <label htmlFor="">Search you destination :</label>
            <div className="input flex">
              <input type="text" placeholder="Enter name here.." />
              <IoLocation className="icon" />
            </div>
          </div>

          <div className="datInput">
            <label htmlFor="date">select your date</label>
            <div className="input flex">
              <input type="date"/>
             
            </div>
          </div>
      
          <div className="priceInput">
            <div className="label_total flex">
                <label htmlFor="">Max price</label>
                <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" name="" id="" />
            </div>
          </div>
          <div className="seaarchOption">
           <HiFilter className="icon" />
           <span>More Filteres</span>
          </div>
        </div>
    {/* --------------------footer------------- */}
        <div data-aos="fade-up" className="homeFooterIcon flex">
    <div className="rightIcons">
      <FaFacebook className="icon" />
      <FaInstagramSquare className="icon" />
      <FaTripadvisor className="icon" />
    </div>
    <div className="leftIcon">
    <CiBoxList className="icon" />
    <TbAppsFilled className="icon" />
    </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
