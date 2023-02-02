import React, { useContext, useState } from 'react'; 
import "../Profile/Profile.css"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { bioContext } from '../../contexts/BioContextProvider';
import logo from "../../assets/Лого.svg"
// import Rectangle from "../../assets/Rectangle 36.png"

const ProfileBio = () => { 
    const {createBio, getBio} = useContext(bioContext) 
    const [bio, setBio] = useState("") 

    function handlecreateBio() { 
        let newBio = new FormData ();  
        newBio.append("about_me", bio); 
        createBio(newBio);
        getBio() 
        console.log(bio)

    } 
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


          <div className="photo"> 
            <img 
              src="https://openseauserdata.com/files/783914de9a9f69a92df64399de49713c.gif" 
              alt="" 
              className="photo-upload" 
              onClick={handleOpen} 
            /> 
            {/* <img src={Rectangle}></img> */}
  <Modal 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description" 
        // className={open} 
      > 
        <Box className="modal" > 
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <img src={logo} className='bioLogo'></img> */}
            <p className='Title'>БИО</p>
            <div>
              <p className='info1'>Bio</p>
<input type="text" name="" id="" placeholder='about me' value={bio} onChange={(e) => setBio(e.target.value)} /> 
</div>
<div>
<input type='submit' onClick={handlecreateBio} value="Отправить" className='button'></input> 

</div>
          </Typography> 

        </Box> 
      </Modal> 

        </div> 
    ); 
}; 

export default ProfileBio;