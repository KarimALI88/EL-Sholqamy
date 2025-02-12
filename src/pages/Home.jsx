import React from 'react'
import MainHeader from '../components/MainHeader'
import homeBg from "../assets/homebg.webp"

const Home = () => {
  return (
    <div className='home-page'>
      <MainHeader title={"headerHomeTitle"} image={homeBg}/>
    </div>
  )
}

export default Home
