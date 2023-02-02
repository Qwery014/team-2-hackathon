import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import  {newsContext} from "../../contexts/NewsContextProvider"  
import NewsCardHP from '../HomePage__Components/NewsCardHP';
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

{news?.map(news => (
  <NewsCardHP key={news.id} news={news}></NewsCardHP>
 


      ))}

   </>
  )
}

export default NewsListHP