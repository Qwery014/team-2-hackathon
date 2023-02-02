
import React, {useState} from 'react';
import { mangaContext } from '../../../contexts/MangaContextProvider';
import TopManga from './TopManga'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const MangaList = () => {

  const { mangas } = React.useContext(mangaContext);


  //pagination 


 
  const [page, setPage] = useState(1);
  const itemsOnPage =4;

  const count = Math.ceil(mangas.length / itemsOnPage);

  const handlePage = (e,p) => {
    setPage(p)
  };

  function currentData(){
    const begin = (page-1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return mangas.slice(begin, end)
  }
  return (
    <>
     {/* <div className='Manga__CatalogCardContainer'> */}

   
      {
        mangas?(
          currentData().splice(0, 3).map(manga => (
            <TopManga manga={manga} key={manga.id} />
          ))
        ): (
          <h3>loading...</h3>
        )}
      <div className='pagination'>

</div>
{/* </div> */}

    </>
  );
};

export default MangaList;