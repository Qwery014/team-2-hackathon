import React,{useContext, useEffect} from 'react';
import { bioContext } from '../../contexts/BioContextProvider';
import BioEdit from './BioEdit';
import { useSearchParams } from 'react-router-dom';

const AboutMe = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    const { getBio, bio} = useContext(bioContext)

    useEffect(() => {
        getBio();
        console.log(bio)
      }, [])
      useEffect(() => {
        getBio();
    
      }, [searchParams])
  return (
 <>
 

<BioEdit key={bio.id} bio={bio} />
  
 
 </>
  )
}

export default AboutMe