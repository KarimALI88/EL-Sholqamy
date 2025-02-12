import React from 'react'
import TopNavBar from './TopNavBar';
import headerBg from '../assets/homebg.webp'
import { useTranslation } from 'react-i18next';
import owner from "../assets/logo.png"

const MainHeader = ({title , image}) => {
  const { t } = useTranslation();
  return (
    <div className='min-h-[100vh]' style={{backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.75)), url(${image || headerBg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <TopNavBar />
      {/*content of header */}
      <div className='flex flex-col gap-5 justify-center items-center font-black text-white capitalize sm:w-[80%] lg:w-[70%] h-[90vh] mx-auto text-center mt-8'>
        <img src={owner} alt='logo' className='w-52 h-52'/>
        <h1 className='mt-8 text-[1.7rem]'>{t(title || "headerHomeTitle")}</h1>
      </div>
    </div>
  )
}

export default MainHeader
