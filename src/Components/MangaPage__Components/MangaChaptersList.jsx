import React from 'react';
import MangaChapterCard from './MangaChapterCard';

const MangaChaptersList = ({ volume }) => {
  return (
    <>
      {
        volume.chapters?.map(chapter => <MangaChapterCard chapter={chapter} key={chapter.id} />)
      }
      <br />
      <br />
    </>
  );
};

export default MangaChaptersList;