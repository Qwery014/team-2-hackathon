import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { mangaContext } from '../../contexts/MangaContextProvider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MangaCommentCard from './MangaCommentCard';
import MangaChaptersList from './MangaChaptersList';
import Navbar from '../HomePage__Components/Navbar';
import Saidbar from '../HomePage__Components/Saidbar';

const MangaDetail = () => {

  const [like, setLike] = useState(false);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const {
    setMangaDetail,
    mangaDetail,
    deleteLikeAtManga,
    addLikeToManga,
    addComment,
    getMangaChapters,
    mangaChapters
  } = useContext(mangaContext);
  const { id } = useParams();

  function handleLike() {
    if (!like) {
      let likedManga = new FormData();
      likedManga.append("title", title);

      addLikeToManga(likedManga, mangaDetail.id);
      setLike(true)
    } else {
      deleteLikeAtManga(mangaDetail.id)
      setLike(false)
    }
  }

  function handleComment() {
    let newComment = new FormData();
    newComment.append("text", comment);

    addComment(newComment, id)
  }

  useEffect(() => {
    setMangaDetail(id);
    setTitle(mangaDetail.title);
    getMangaChapters(id)
  }, []);

  return (
    <>
      <Navbar />
      <div className="mangaDetail__content">

        <Saidbar />
        <div className='mangaDetail'>
          <p>
            Название: {mangaDetail.title}
          </p>
          <p>
            Жанр: {mangaDetail.genre}
          </p>
          <img src={mangaDetail.image} alt="" />
          <button onClick={() => handleLike()}>
            <FavoriteIcon />
          </button>

          <hr />
          <br />

          <p>Главы:</p>
          <div className="volumes">
            {
              mangaChapters?.map(volume => <MangaChaptersList key={volume.slug} volume={volume} />)
            }
          </div>

          <hr />
          <br />

          <p>Комментарии:</p>
          <br />
          <div>
            <input type="text" placeholder='Комментарий' value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={() => handleComment()} >Добавить комментарий</button>
          </div>

          {
            mangaDetail.commentaries?.map(comments => <MangaCommentCard key={comments.id} comments={comments} />)
          }

          <br /><br /><br /><br />
        </div>
      </div>
    </>
  );
};

export default MangaDetail;