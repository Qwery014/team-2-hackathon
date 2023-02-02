
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useAnime } from '../../../contexts/AnimeContextProveder';

// import 'bootstrap/dist/css/bootstrap.min.css';


// import { animeContext } from '../../../contexts/AnimeContextProveder';



const PostCard = ({ anime }) => {
 const {deletePost, creatLikeAnime, deleteLikeAnime} = useAnime()
 const navigate = useNavigate();

 const [like, setLike] = useState(true);
 
function handleLike(){ 
  if (!like) { 
    let likeAnime = new FormData(); 
 
    creatLikeAnime(likeAnime, anime.id); 
    setLike(true) 
    console.log(likeAnime, anime.id) 
  } else { 
    deleteLikeAnime(anime.id) 
   setLike(false) 
  } 
}
  
  return (
    <>
    <Card style={{ width: '18rem', background:"white", borderRadius: "1rem", marginTop:"10px" }}>
      <Card.Img variant="top" src="/img7.png" />
      <Card.Body>
        <Card.Title>Название: {anime.title}</Card.Title>
        <Card.Text>
          Жанр: {anime.genre}
        </Card.Text>
        <Button variant="danger" style={{background: "red", borderRadius: "1rem", width: "40%", marginLeft: "5%"}} onClick={()=>deletePost(anime.id)}>Удалить</Button>
         <Button variant="success" style={{background: "yellow", borderRadius: "1rem", width: "40%", marginLeft: "5%"}} onClick={()=>navigate(`/editAnime/${anime.id}`)}>Изменить</Button>
        
<button onClick={() => handleLike()}> 
            {like ? <p> лайкнуто ежже</p> : <p> не лайкнуто ежже</p>} 
          </button>
      </Card.Body>
    </Card>

    </>
  )
}

export default PostCard





