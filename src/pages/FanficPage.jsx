import React from "react";
import UserFanfic from "../components/UserFanfic/UserFanfic";
import Navbar from "../components/HomePage__Components/Navbar";
import ProfileCard from "../components/Profile/ProfileCard";
import Saidbar from "../components/HomePage__Components/Saidbar";
import Animes from "../components/HomePage__Components/Animes";
import bg from "../components/UserFanfic/Rebekka.png"
import "../components/UserFanfic/FanficRead.css"
import CommentList from "../components/CommentCard/CommentList";
import CreateComment from "../components/CommentCard/CreateComment";


const FanficPage = () => {
  const stylebg = {
    zIndex: '-1',
    position: 'absolute',
    left: '76%',
    top: '300px',
  }
  return (

    <>
      <Navbar />
      <ProfileCard />
      <Saidbar />
      <div
        style={stylebg}>

      </div>
      <div className="fanfic-page-col">
        <UserFanfic />

        
        <CommentList />
        <CreateComment />

      </div>


    </>
  );
};

export default FanficPage;
