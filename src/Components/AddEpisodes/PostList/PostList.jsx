import React, { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { animeContext } from '../../../contexts/AnimeContextProveder';
import PostCard from '../PostCard/PostCard'

const PostList = () => {
  const { getPost, posts } = useContext(animeContext)

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getPost();
    console.log(posts)
  }, [])


  useEffect(() => {
    getPost();

  }, [searchParams])

  return (
   <>
   <h2 
    style={{
    color: 'white',
    margin: '3% 10% 0 10%'}}>ANIME</h2>

   <div style={{
    width: "80%", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "space-around", 
    flexWrap:'wrap', 
    margin: '1% 10% 0 10%'}}>

     {posts?.map(anime => (
        <PostCard key={anime.id} anime={anime}></PostCard>
      ))}
    </div>
   
   </>
  )
}

export default PostList