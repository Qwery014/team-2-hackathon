import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { mangaContext } from '../../contexts/MangaContextProvider';
import { useParams } from 'react-router-dom';

const MangaCommentCard = ({ comments }) => {

  const { deleteComment } = useContext(mangaContext);
  const { id } = useParams()

  function commentDel() {
    let newComment = new FormData();
    newComment.append("text", comments.text);
    newComment.append("id", comments.id);

    deleteComment(newComment, id)
  }

  return (
    <div>
      <br />
      {comments.text}
      {/* <button onClick={() => commentDel()}>
        <DeleteIcon />
      </button> */}
      <br />
      <br />
    </div>
  );
};

export default MangaCommentCard;