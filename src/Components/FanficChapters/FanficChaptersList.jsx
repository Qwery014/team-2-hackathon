import React, { useContext, useEffect } from 'react';
import { postContext } from '../../contexts/PostsContextProvider';
import FanficChapterCard from './FanficChapterCard';
import { useNavigate, useParams } from 'react-router-dom';
import FanficChapter from './FanficChapter';
import FanficChapterCreate from './FanficChapterCreate';
import CommentList from '../CommentCard/CommentList';

const FanficChaptersList = () => {
  const {id} = useParams()

  const { onePost, getPostDetails } = useContext(postContext);
  useEffect(()=>{
getPostDetails(id)
  },[])
const navigate = useNavigate()

// console.log(onePost)
  return (
    <>




 {
   onePost?.page.map(page => (     
    <div>

      <FanficChapterCard page={page} key={page.id}  />  
             
    </div>  
     ))
   }



    </>
  )
};

export default FanficChaptersList;