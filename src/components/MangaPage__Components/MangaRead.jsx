
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mangaContext } from '../../contexts/MangaContextProvider';
import MangaChapterImage from './MangaChapterImage';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const MangaRead = () => {
  const { setMangaToRead, mangaChapterImgs } = useContext(mangaContext);
  const { page } = useParams()

  useEffect(() => {
    setMangaToRead(page);
  }, [])




  return (
    <>
      <div>
        {mangaChapterImgs.images?.map(page => <MangaChapterImage page={page} key={page.id} />)}
      </div>



    </>


  );
};

export default MangaRead;