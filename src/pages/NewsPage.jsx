import React from 'react';
import Navbar from '../components/HomePage__Components/Navbar';
import Saidbar from '../components/HomePage__Components/Saidbar'
import "../Styles/HomePage.css"
import NewsList from '../components/NewsList/NewsList';
import "../Styles/NewsPage.css"
const NewsPage = () => {
    return (
        <>
            <img src="/homePageBackImg.png" alt="" className='HomePage-BackgroundImg news-bg' />

        <Navbar/>
        <Saidbar/>

        <div className='news-card'>
        <h2 className='AllNewsMainTitle'>Лента новостей</h2>
           <NewsList/>
        </div>

        </>
    );
};

export default NewsPage;