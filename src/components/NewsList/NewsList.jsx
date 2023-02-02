
import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import  {newsContext} from "../../contexts/NewsContextProvider"  
import NewsCard from '../NewsCard/NewsCard';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const NewsList = () => {
  const { getNews, news} = useContext(newsContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getNews();
    console.log(news)
  }, [])

  useEffect(() => {
    getNews();

  }, [searchParams])

  const [page, setPage] = useState(1);
  const itemsOnPage =4;

  const count = Math.ceil(news.length / itemsOnPage);

  const handlePage = (e,p) => {
    setPage(p)
  };

  function currentData(){
    const begin = (page-1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return news.slice(begin, end)
  }
  return (
   <>

{news?
(
  currentData().map(news => (
    <NewsCard key={news.id} news={news}></NewsCard>
   
  
  
        ))
): (
  <h3>loading...</h3>
)}

<div className='pagination'>

      <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handlePage} />
    </Stack>
      </div>


   </>
  )
}

export default NewsList