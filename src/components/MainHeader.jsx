import React from 'react'
import TopNavBar from './TopNavBar';
import headerBg from '../assets/homebg.webp'
import { useTranslation } from 'react-i18next';

const MainHeader = ({title = "headerHomeTitle"}) => {
  const { t } = useTranslation();
  return (
    <div className='min-h-[100vh]' style={{backgroundImage: `linear-gradient(rgba(1,1,1,0.7), rgba(1,1,1,0.6)), url(${headerBg})`, backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <TopNavBar />
      {/*content of header */}
      <div className='flex justify-center items-center font-black text-[2.4rem] text-white capitalize w-[80%] h-[90vh] mx-auto text-center'>
        <h1>{t(title)}</h1>
      </div>
    </div>
  )
}

export default MainHeader
