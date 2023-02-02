import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import  {newsContext} from "../../../contexts/NewsContextProvider"  
import NewNewsCard from '../new news/NewNewsCard';
const NewsListHP = () => {
  const { getNews, news} = useContext(newsContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getNews();
    console.log(news)
  }, [])

  useEffect(() => {
    getNews();

  }, [searchParams])

  return (
   <>

{news?.slice(2, 6).map(news => (
  <NewNewsCard key={news.id} news={news}></NewNewsCard>
 


      ))}

   </>
  )
}

export default NewsListHP