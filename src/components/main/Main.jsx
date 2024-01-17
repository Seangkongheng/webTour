import React, { useEffect } from 'react'
import './Main.css'
import './Main.scss'
import img from '../../Assets/plate3.png';
import { LuClipboardCheck } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Aos from 'aos'
import 'aos/dist/aos.css'
  //array store 
  const Data=[
    {
      id:1,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:2,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:3,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:4,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:5,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:6,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:7,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:8,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:9,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:10,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:11,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
    {
      id:12,
      imgSrc:img,
      destTitle:'bora Bora',
      location:'phone pneh',
      grade:'Cultubal Relax',
      fees:'$700',
      decription:'The optiome of ramance Bora Bora is one of the best travel destionation is the word This is place khnow for its luxurious stays and adventurous activities'

    },
  ]
const Main = () => {
 
// hok scroll anmiation
useEffect(()=>{
  Aos.init({duration:2000})
},[])




  return (
  <section className="main container section">
    <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited destionation
        </h3>
    </div>
    <div className="secContent grid">


 

       {
        Data.map(({id,imgSrc,destTitle,location,grade,fees,decription})=>{
          return(
            <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDev">
                    <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfor">
                  <h4 className="destTitle">
                      {destTitle}
                      <span className="continent flex">
                      <HiOutlineLocationMarker className='icon' />
                      <div className="name">
                        {location}
                      </div>
                      </span>
                      <div className="fees flex">
                        <div className="grad">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>

                      </div>
                      <div className="desc">
                          <p>{decription}</p>
                      </div>

                      <button className='btn flex'>Detail<LuClipboardCheck className='icon' /></button>
                  </h4>
                </div>
            </div>
            
          )
        })
       }
    </div>
  </section>
  )
}

export default Main