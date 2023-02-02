import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fanficContext } from '../../contexts/FanficContextProvider';
import { useSearchParams } from 'react-router-dom';

const AddFanficChapter = ({fanfic}) => {
    const navigate = useNavigate();

    const { getFanfic,createFanfic} = useContext(fanficContext);
  
    const [chapter, setChapter] = useState('');
    const [text, setText] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
  
    function handleChapter() {
      let newChapter = new FormData();
      newChapter.append("chapter", chapter);
      newChapter.append("text", text)
      createFanfic(newChapter, fanfic.id)
      console.log(chapter, text)
  getFanfic()
    }
  return (
   <>


   </>
  )
}

export default AddFanficChapter