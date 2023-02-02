import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useContext, useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { postContext } from '../../contexts/PostsContextProvider'
import CommentList from '../CommentCard/CommentList';
import CreateComment from '../CommentCard/CreateComment';
import FanficChapterCreate from '../FanficChapters/FanficChapterCreate';
import FanficChaptersList from '../FanficChapters/FanficChaptersList';
import AddIcon from '@mui/icons-material/Add';

import './FanficRead.css'



const UserFanfic = () => {
  const { onePost, getPostDetails } = useContext(postContext);
  const { fanficDetails, setFanficDetails } = useState({})
  const { id } = useParams()

  const navigate = useNavigate();

  useEffect(() => {
    getPostDetails(id);
  }, [])






  const isOwner = () => {
    return localStorage.getItem("username") ? true : false
  }




  return (
    <>




<FanficChapterCreate />
    <div className='chapter-text'>
      {/* <p className='chapter-data'>{onePost.date_created}</p> */}
<div className='chapter-desc'>
  {/* #{onePost.description} */}
</div>

{
   onePost?.page.map(page => (     
    <div>

       <FanficChaptersList page={page} key={page.id} />  
             
    </div>  
     ))
   }
    
    </div>
{/* 
    <div className='chapter-comments'>
      <CreateComment />
<CommentList onePost={onePost} />
    </div> */}
     
     
     
     </>

    
  
  )
}

export default UserFanfic