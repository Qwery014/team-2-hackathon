import React, { useContext, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import FanficChapter from './FanficChapter';


const FanficChapterCard = ({ page }) => {
  const navigate = useNavigate();
// const {
//   getChapter,
//   chapter
//  } = useContext(fanficContext)
//  const { id } = useParams();

//  useEffect (()=>{
//   getChapter(id)
//  })



  return (


    <>

      <div>
{/* 
{
  chapter?.map(chap=> <FanficChapter key={chap.id} chap={chap.text}  />)
} */}


        <p>номер главы:{page.chapter}</p>
        описание: {page.text}
     

      </div>




    </>
 
  );
};

export default FanficChapterCard;