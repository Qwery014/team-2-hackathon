import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import FanficChapterCard from './FanficChapterCard';
import { postContext } from '../../contexts/PostsContextProvider';
import FanficText from '../FanficRead/FanficText';


const FanficChapter = () => {

  const {getChapter, chapter} = useContext(fanficContext)

 const {id} = useParams()

//  useEffect(() => {

//   getChapter();
// }, [chapter])

useEffect(()=>{
getChapter(id)

},[])
console.log(chapter)

// console.log(page)
// const getChap = () => {
//   chapter.forEach((chap) => {
//     if (chap.id == id) {
//       setOneChap(chap)
//     }
//   })
// }




  return (
    <>

   



  
      
      
    </>
  )
};

export default FanficChapter;