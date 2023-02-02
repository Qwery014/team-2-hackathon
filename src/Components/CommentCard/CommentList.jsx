import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postContext } from '../../contexts/PostsContextProvider';
import CommentCard from './CommentCard';
import "./Comments.css"

const CommentList = () => {
  const { getPostDetails, onePost } = useContext(postContext);
  const { id } = useParams();

  useEffect(() => {
    getPostDetails(id)
  }, [])

  return (
    onePost ? (

      <div className='comments'>
        <div className='comments-title'>Комментарии</div>
        <div className="comment-list">
          <div className="comment-list__blur blur-top"></div>
          {
            onePost.commentaries?.map(comment =>
              <CommentCard comment={comment} key={comment.id} />)
          }
          <div className="comment-list__blur blur-bottom"></div>
        </div>
      </div>
    ) : (
            console.log("err")
          )
  );
};

export default CommentList;