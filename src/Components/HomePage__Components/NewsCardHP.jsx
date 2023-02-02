import React, {useContext, useEffect} from 'react';
import { newsContext } from '../../contexts/NewsContextProvider';
import cardImg from "../../assets/newsImage1.jpg"
import "../../Styles/HomePage.css"


const NewsCardHP = ( {news}) => {
const {getNews} = useContext(newsContext)



useEffect(() => {
    const animItems = document.querySelectorAll(".anim-items")
    console.log(animItems)
})




  return (
   <>
    
   <div className='  '>
    
    <hr  className='newsCard_hr'/>
    <div className='newsCard-one hello anim-items active'>

    <div className='news-img'>
        <img src={news.image}alt="hello" />
    </div>
    <div className='news-body'>
        <h6 className='news-title'>{news.title}</h6>
        <p className='news-text'>{news.text}</p>
    </div>
    </div>
   </div>

   



   
   </>
  )
}

export default NewsCardHP