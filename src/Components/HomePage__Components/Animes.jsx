import React from 'react';
import TopMangaList from "./MangaHome/TioMangaLIst"

function Animes() {
  return <>
            <div className='hp_anime-cont'>
            <h4 className='top'>Топ манги</h4>
              <TopMangaList/>

              </div>
  </>
}

export default Animes;