import React, { useContext, useEffect, useState } from 'react';
import { animeContext } from '../contexts/AnimeContextProveder';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import  {newsContext} from "../contexts/NewsContextProvider"

import PostList from '../components/PostList/PostList';


const AdminPage =() =>{
  const [animeTitle, setAnimeTitle] = useState("sdfsd")
  const [genre, setGenre] = React.useState('');

  const { createPost, getPost } = useContext(animeContext)
const {createNews} = useContext(newsContext)
// news
const [ newsTitle,  setNewsTitle] = useState("")
const [newsText, setNewsText] = useState("")


function addNews () {
  let newNews = new FormData();
  newNews.append("title", newsTitle);
  newNews.append("text", newsText);
  createNews(newNews)
}




// news end


  useEffect(() => {
 getPost()
  }, []);


  function handleCreateAnime(){

    let edittedAnimePost = new FormData();

    edittedAnimePost.append("title", animeTitle);
    edittedAnimePost.append("genre", genre);

    createPost(edittedAnimePost)
    getPost()
  }

  const handleChangeGenre = (event) => {
    setGenre(event.target.value);
    console.log(genre)
  }
    



    return(
        <>
        <div style={{display: "flex", flexDirection: "column", width:"15%"}}>
            <input type="text" placeholder="title" onChange={(e) => setAnimeTitle(e.target.value)} />
              
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Жанр</InputLabel>
                <Select
                 labelId="demo-select-small"
                 id="demo-select-small"
                 value={genre}
                 label="Жанр"
                 onChange={handleChangeGenre}
               >
                 <MenuItem value={"horror"}>horror</MenuItem>
                 <MenuItem value={"romance"}>Romance</MenuItem>
                 <MenuItem value={"fantasy"}>Fantasy</MenuItem>
                 <MenuItem value={"comedy"}>Comedy</MenuItem>
                 <MenuItem value={"test"}>test</MenuItem>

               </Select>
             </FormControl>

            <input type="submit" onClick={handleCreateAnime} />
        </div>

        <PostList />


        <div class="card">
  <h5 class="card-header">add news</h5>
  <div class="card-body">
    <input type="text"  value={newsTitle} onChange={(e)=> setNewsTitle(e.target.value)} placeholder="title"/>
    <input type="text"  value={newsText}onChange={(e)=> setNewsText(e.target.value)} placeholder="text"/>
   <input type="submit" value="add news" onClick={addNews}/>
    
  </div>
</div>







        </>
    )
}

export default AdminPage