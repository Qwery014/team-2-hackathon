import React from 'react'

import News from '../components/HomePage__Components/News'
import AllNews from '../components/HomePage__Components/News'
import Fanfics from '../components/HomePage__Components/Fanfics'
import Animes from '../components/HomePage__Components/Animes'
import Saidbar from '../components/HomePage__Components/Saidbar'
import Navbar from '../components/HomePage__Components/Navbar'
import { motion } from 'framer-motion'

import NewsListHP from '../components/HomePage__Components/NewsListHP'



import "../Styles/HomePage.css"



const HomePage = () => {
  const bodyColor = {
    backgroundColor: '#202020'

  }
  return (
    <>

    <motion.div
    initial={{ y: -700,}}
    animate={{ y: 0,}}
    transition={{ duration: 1.4}}
    >
    <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg' />
    </motion.div>


      <Navbar/>
    <div className='homePage__container'>

    <motion.div
    initial={{ y: -700}}
    animate={{ y: 0,}}
    transition={{ duration: 1}}
    >
      <News/>

    </motion.div>


      {/* <div className='homePage__AllNews-FanfAnime'> */}

          <motion.div
    initial={{ y: 700,}}
    animate={{ y: 0,}}
    transition={{ duration: 1.7}}
    >
        <h2 className='homePage_NewsMainTitle'>Лента новостей</h2>
       <div className='homePage_news-card'>
           <NewsListHP/>

        </div>
    </motion.div>
    
      </div>


    {/* </div> */}
      <div className='FanficsAndAnime F-A_HomePage'>
          {/* <Fanfics/> */}
      <Animes/>
          

          <motion.div
    initial={{ x: 700,}}
    animate={{ x: 0,}}
    transition={{ duration: 2}}
    >
    </motion.div>


        </div>
    <motion.div 
    initial={{ x: -500,}} 
    animate={{ x: 0,}} 
    transition={{ duration: 1}}
    >
         <Saidbar/>
    </motion.div>
 
    </>
  )
}

export default HomePage