import React, {useContext, useEffect} from 'react';
import { newsContext } from '../../../contexts/NewsContextProvider';
// import cardImg from "../../../assets/newsImage1.jpg"
import "../../../Styles/HomePage.css"

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import '../../../Styles/MangaPage.css';

const NewsCardHP = ( {news}) => {
const {getNews} = useContext(newsContext)



useEffect(() => {
    const animItems = document.querySelectorAll(".anim-items")
    console.log(animItems)
})




  return (
   <>
   
   {/* <div className='  '>
    
    <div className='newsCard-one hello anim-items active'>

    <div className='news-img'>
        <img src={news.image}alt="hello" />
    </div>
    <div className='news-body'>
        <h6 className='news-title'>{news.title}</h6>
   
    </div>
    </div>
   </div> */}



   <div className='news__CatalogCard'>
        <img src={news.image} alt="" className='Manga__Catalog-cardImg' />
        <div className='Hover-readCont'>
          {/* <button className='Hover-readButton'>Читать</button> */}
        </div>

        <div className='Manga__Catalog-DataTitleRange'>
          <div className='Manga__Catalog-cardTitleCont'>
            <h2 className='Manga__Catalog-cardTitle'>{news.title}</h2>
          </div>
        </div>

        <div className='Manga__Catalog-shadowTop'></div>
        <div className='Manga__Catalog-shadowBottom'></div>

    
      </div>


   
   </>
  )
}

export default NewsCardHP