
  import React, { useContext, useEffect, useState, } from "react";
  import { useNavigate, useParams } from "react-router-dom";
import { animeContext } from '../contexts/AnimeContextProveder';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



  
  
  const EditAnime = () => {
    
 

      // const [genre, setGenre] = React.useState();
      
      const { editAnime, getPost, onePost, } = useContext(animeContext)
      const [anime, setAnime] = useState(onePost)
      const [title, setAnimeTitle] = useState("")
      const [genre, setGenre] = useState("");
      const { id } = useParams();
  
  console.log(id)
      useEffect(() => {
          setAnime(onePost);
          console.log(onePost)
        }, []);

        // useEffect(() => {
        //   getPost();
        // }, []);

    function handleSave(){
  

      let newAnime = new FormData();
      newAnime.append("title", title);
      newAnime.append("genre", genre);
      editAnime( newAnime, id);
      navigate("/admin");
      console.log("baka")
    }
  
    const handleChangeGenre = (event) => {
      setGenre(event.target.value);
      console.log(anime.genre)
    }
    const navigate = useNavigate();



  
    return (
      <>
        <div style={{display: "flex", flexDirection: "column", width:"15%"}}>
            <input type="text" placeholder="title" value={title} onChange={(e) => setAnimeTitle(e.target.value)} />
              
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Жанр</InputLabel>
                <Select
                 labelId="demo-select-small"
                 id="demo-select-small"
                 value={anime.genre}
                 label="Жанр"
                onChange={handleChangeGenre}
                // onChange={(e) => setGenre(e.target.value)}
               >
                 <MenuItem value={"horror"} >horror</MenuItem>
                 <MenuItem value={"romance"} >Romance</MenuItem>
                 <MenuItem value={"fantasy"}  >Fantasy</MenuItem>
                 <MenuItem value={"comedy"}  >Comedy</MenuItem>
                 <MenuItem value={"test"}  >test</MenuItem>

               </Select>
             </FormControl>

            <input type="submit" onClick={handleSave} />
        </div>

      
      </>
    );
  };
  
  export default EditAnime;
  