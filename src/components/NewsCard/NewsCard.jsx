import React, {useContext} from 'react';
import { newsContext } from '../../contexts/NewsContextProvider';
import cardImg from "../../assets/newsImage1.jpg"


const NewsCard = ( {news}) => {
const {getNews} = useContext(newsContext)


  return (
   <>
    
   

    <hr />
    <div className='newsCard-one'>

    <div className='news-img'>
        <img src={news.image}alt="" />
    </div>
    <div className='news-body'>
        <h6 className='news-title'>{news.title}</h6>
        <p className='news-text'>{news.text}</p>
    </div>
    </div>


   
   </>
  )
}

export default NewsCard