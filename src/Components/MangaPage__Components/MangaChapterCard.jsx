import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MangaChapterCard = ({ chapter }) => {
  const { id } = useParams()
  const navigate = useNavigate();
  return (
    <>
      <br />
      <a onClick={() => navigate(`/manga/${id}/${chapter.volume_id}/${chapter.id}`)} style={{ cursor: "pointer" }}>
        {chapter.volume_id} {chapter.title}
      </a>
      <br />
    </>
  );
};

export default MangaChapterCard;