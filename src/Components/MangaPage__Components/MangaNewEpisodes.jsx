import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion'
import '../../Styles/MangaPage.css'

const MangaNewEpisodes = () => {
    return (
        <>

            <div className='Manga__MainTitle'>
                <h2 className="MangaTitle">Манга</h2>
                <span className='MangaLine'></span>
            </div>
            <div className='Manga__newEpisodesContainer'>
                <h2 className='Manga__title'>Новые эпизоды</h2>


                <div className='Manga__newEpisodesCardContainer'>



                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 0.4}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc </h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>
                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 0.6}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 0.8}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 1}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 1.2}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>
                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 1.4}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 1.6}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 1.8}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 2}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>

                    </motion.div>


                    <motion.div 
                        initial={{ x: 1000,}}
                        animate={{ x: 0,}}
                        transition={{ duration: 2.2}}
                    className='Manga__newEpisodesCard'>

                        <img src="/Newepisodes1.png" alt="" className='Manga__NE-cardImg' />

                        <div className='Hover-readCont'>
                            <button className='Hover-readButton'>Читать</button>
                        </div>

                        <div className='Mange__NE-DataTitleRange'>
                            <p className='Manga__NE-cardData'>23 Июля 2023</p>
                            <div className='Manga__NE-cardTitleCont'>
                                <h2 className='Manga__NE-cardTitle'>Ван Пиc</h2>
                            </div>
                            <Stack spacing={1} className="Manga__NE-rating" >
                                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </Stack>
                        </div>

                        <div className='Manga__NE-shadowTop'></div>
                        <div className='Manga__NE-shadowBottom'></div>
                    </motion.div>


                </div>



            </div>
        </>
    )
}

export default MangaNewEpisodes