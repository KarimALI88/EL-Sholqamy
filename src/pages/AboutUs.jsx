import React from 'react'
import MainHeader from './../components/MainHeader';
import aboutBg from "../assets/aboutBg.png"
import AboutUsPart from './../components/AboutUsPart';
import OurValues2 from '../components/OurValues2';

const AboutUs = () => {
  return (
    <div>
      <MainHeader title={"aboutHeaderTitle"} image={aboutBg}/>
      <AboutUsPart />
      <OurValues2 />
    </div>
  )
}

export default AboutUs
