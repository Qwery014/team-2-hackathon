import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../../Styles/MangaPage.css';
import { useNavigate } from 'react-router-dom';

const MangaCard = ({ manga }) => {
  const navigate = useNavigate();


  return (
    <>
      <div className='Manga__CatalogCard' onClick={() => navigate(`/manga/${manga.id}`)}>
        <img src={manga.image} alt="" className='Manga__Catalog-cardImg' />
        <div className='Hover-readCont'>
          <button className='Hover-readButton'>Читать</button>
        </div>

        <div className='Manga__Catalog-DataTitleRange'>
          <div className='Manga__Catalog-cardTitleCont'>
            <h2 className='Manga__Catalog-cardTitle'>{manga.title}</h2>
          </div>
          <Stack spacing={1} className="Manga__Catalog-rating" >
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
          </Stack>
        </div>

        <div className='Manga__Catalog-shadowTop'></div>
        <div className='Manga__Catalog-shadowBottom'></div>

    
      </div>
    </>
  );
};

export default MangaCard;