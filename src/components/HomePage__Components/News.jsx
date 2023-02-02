import React, { useContext } from 'react';
import { newsContext } from '../../contexts/NewsContextProvider';
import NewNewsList from "./new news/NewNewsList"

function News({news}) {
   const {getNews} = useContext(newsContext)

  return <>
      <div className="News__container">
        <div className='NewsTitle'>
        <h2 className="newsTitle">Новости</h2>
        <span className='newsLine'></span>
        </div>
        <div className='newsContent'>
                <img src="/hotEpisodesIcon.png" alt=""  className='newsFireIcon'/>
            <div className='newEpisodes'>
                <div className='hotNews'>
                <p className='episodes-title'>Новые Эпизоды</p>
                </div>
            </div>

           
          

           

      <NewNewsList />
        </div>
      </div>
  </>
}

export default News;



