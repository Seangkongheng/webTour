import React, { useEffect } from 'react'
import './Footer.css'
import './Footer.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaChevronRight } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import video2 from '../../Assets/video.mp4'
const Footer = () => {

// hok scroll anmiation
useEffect(()=>{
  Aos.init({duration:2000})
},[])











  return (
   <section className="footer">
    <div className="videoDev">
      <video src={video2} loop autoPlay muted type="video/mp4" ></video>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDev">
              <input type="text" placeholder='Enter Email...' />
              <button data-aos="fade-up" className="btn flex">
             SEND <FiSend className='icon' />
              </button>
          </div>
        </div>
        <div className="footCard flex">
            <div className="footerInfo flex">
              <div className="logoDiv">
                <a href="" className="log flex">Travel</a>
              </div>
              <div data-aos="fade-up" className="footerParagraph">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam quidem excepturi repellendus non quas nostrum nulla error, odio repudiandae ex maxime ad magnam exercitationem ullam nisi aperiam repellat hic voluptatem?

              </div>
              <div data-aos="fade-up" className="footerSocail flex">
              <FaTwitter className='icon' />
              <FaFacebook className='icon' />
              <FaYoutube className='icon' />
              <FaTripadvisor className='icon' />
              </div>
            </div>
    
            <div  className="footerLink grid">
                      {/* Group one */}
              <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />service
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Insurance
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Angency
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Tourism
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />payment
                  </li>
               
              </div>
              <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                  <span className="groupTitle">
                    PARTNER
                  </span>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />service
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Insurance
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Angency
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Tourism
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />payment
                  </li>
               
              </div>
              <div data-aos="fade-up" data-aos-duration="6000" className="linkGroup">
                  <span className="groupTitle">
                    OUR AGENCY
                  </span>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />service
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Insurance
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Angency
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />Tourism
                  </li>
                  <li className="footerList flex">
                  <FaChevronRight className='icon' />payment
                  </li>
               
              </div>
            </div>
            <div data-aos="fade-up" className="footerDiv flex">
                <small>BEST TRAVEL WEBSITE THEME</small>
                <small>COPYRIGHT RERSERVED SEANG KONG HENG 2024</small>
            </div>
        </div>
    </div>
    </div>

   
   </section>
  )
}

export default Footer