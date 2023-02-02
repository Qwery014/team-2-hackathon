import React from 'react';

import Navbar from '../components/HomePage__Components/Navbar';
import Saidbar from '../components/HomePage__Components/Saidbar'
import MangaNewEpisodes from '../components/MangaPage__Components/MangaNewEpisodes';
import MangaCatalog from '../components/MangaPage__Components/MangaCatalog';
import Fanfics from '../components/HomePage__Components/Fanfics';
import Animes from '../components/HomePage__Components/Animes'
import { motion } from 'framer-motion'


import '../Styles/HomePage2.css'
import '../Styles/HomePage.css'


const MangaPage = () => {
    return (
        <>

                <motion.div
                 initial={{ y: -700,}}
                 animate={{ y: 0,}}
                 transition={{ duration: 2.2}} >
                    <img src="/chainsawman.png" alt="" className='MangaPageChainsawman' />
                 </motion.div>



            <Navbar />


            <motion.div 
            initial={{ x: -200,}} 
            animate={{ x: 0,}} 
             transition={{ duration: 1}}>
                <Saidbar/>
            </motion.div>
            <MangaNewEpisodes />


            <motion.div
                 initial={{ y: 700,}}
                 animate={{ y: 0,}}
                 transition={{ duration: 2.2}} >
                    <MangaCatalog />
                 </motion.div>


            <div className='FanficsAndAnime'>
                {/* <Fanfics /> */}

                <Animes />
            </div>
        </>
    );
};

export default MangaPage;