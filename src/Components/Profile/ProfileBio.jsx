import React, { useContext, useState, useEffect } from 'react'; 
import "../Profile/Profile.css"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bioContext } from '../../contexts/BioContextProvider';
import BioCreate from "./BioCreate"
import BioEdit from './BioEdit';
import AboutMe from './AboutMe';


const ProfileBio = () => { 
  const {getBio, bio} = useContext(bioContext) 


console.log(bio)

  useEffect(()=>{
    getBio()
  },[])





    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true); 
    const handleClose = () => setOpen(false); 
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };




    return ( 
             <div>
            <div className="profile-container"> 
        <div className="NewsTitle"> 
          <h2 className="newsTitle">Профиль</h2> 
          <span className="newsLine"></span> 
        </div> 
        <div className="profile-card"> 
          <div className="photo"> 
     <BioCreate/>
          </div> 


          <div className="profile-username"> 
            {localStorage.getItem("username")} 
          </div>
          <div className='edited-bio'>

    <AboutMe/>
          {/* <BioEdit/> */}
          </div>


        </div> 
       
        </div> 
        </div>
    ); 
}; 


export default ProfileBio;