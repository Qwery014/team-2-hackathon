import React, { useEffect, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { mangaContext } from '../../contexts/MangaContextProvider';

const MangaChapterImage = ({ page }) => {

  // const {mangaChapterImgs } = useContext(mangaContext);
// console.log(mangaChapterImgs)
// console.log(page)



  return (
<>

<div className='mangaChapter-img'>
   <img src={page.url} alt="" />
 </div>


         
    
</>
  


  );
};

export default MangaChapterImage;