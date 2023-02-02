import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import PostCard from '../PostCard/PostCard';
import Fanfics from '../HomePage__Components/Fanfics'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PostList = () => {
  const { getPost,post} = useContext(postContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getPost();
    console.log(post)
  }, [])

  console.log(post)
  // useEffect(()=>{
  //     getPost()
  //     console.log(posts)
  // })

  useEffect(() => {
    getPost();

  }, [searchParams])

  //pagination 


 
  const [page, setPage] = useState(1);
  const itemsOnPage =4;

  const count = Math.ceil(post.length / itemsOnPage);

  const handlePage = (e,p) => {
    setPage(p)
  };

  function currentData(){
    const begin = (page-1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return post.slice(begin, end)
  }
  return (
   <>
        <div className="profile-fanfics-card"> 
{post ? (
  currentData().map(post => (
    <Fanfics key={post.id} post={post}/>
          // <PostCard key={post.id} post={post}></PostCard>
   
        ))
): (
  <h3>loading...</h3>
)}
      </div>
      <div className='pagination'>

      <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handlePage} />
    </Stack>
      </div>
   </>
  )
}

export default PostList