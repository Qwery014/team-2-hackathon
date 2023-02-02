
import * as React from 'react';
import '../../Styles/MangaPage.css';

// import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { mangaContext } from '../../contexts/MangaContextProvider';
import { useEffect, useState, useContext } from 'react';
import MangaList from './MangaList';


import { useSearchParams } from "react-router-dom";


const MangaCatalog = () => {

     const { getManga, getGenres, mangaGenres, fetchByParams } = React.useContext(mangaContext);
     const [genre, setGenre] = React.useState('all');

     useEffect(() => {
          getManga();
          getGenres();
          fetchByParams("genre", genre);
     }, [genre])







     // filtr


     return (
          <div className='Manga__catalogContainer'>

               <div className='Manga__TitleJanr'>
                    <h2 className='Manga__catalogTitle'>Каталог</h2>

                    <div className='SelectJanr'>
                         <FormControl sx={{ m: 1, minWidth: 80, backgroundColor: "#414141" }}>
                              <InputLabel id="demo-simple-select-autowidth-label" className='Manga__ChooseJanr'>Жанр</InputLabel>
                              <Select
                                   labelId="demo-simple-select-autowidth-label"
                                   id="demo-simple-select-autowidth"
                                   value={genre}
                                   onChange={(e) => setGenre(e.target.value)}
                                   autoWidth
                                   label="Жанр"
                              // onClick={(e) => fetchByParams("genre", genre)}
                              >
                                   <MenuItem name='all' value="all">Жанры</MenuItem>
                                   {
                                        mangaGenres?.map(genre => (
                                             <MenuItem value={genre.slug} key={genre.slug}>{genre.title}</MenuItem>
                                             // console.log(genre)
                                        )
                                        )
                                   }


                              </Select>
                         </FormControl>
                    </div>
               </div>

          
               <div className='Manga__CatalogCardContainer'>
                    <MangaList />
               </div>








          </div>
     )
}

export default MangaCatalog