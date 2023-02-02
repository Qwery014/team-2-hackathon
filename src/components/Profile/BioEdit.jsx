import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bioContext } from '../../contexts/BioContextProvider';
import "../Profile/Profile.css"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import logo from "../../assets/Лого.svg"
const BioEdit = ({ bio }) => {
    const {saveEditedBio, getBioDetails, bioDetails} = useContext(bioContext) 
    const [bioED, setBioED] = useState("");
    
  
    const handleEdit = () => {
      let edittedBio = new FormData();
  
      edittedBio.append("about_me", bioED);

  
      saveEditedBio(edittedBio, bio.id);
    };





 
 const [open, setOpen] = useState(false); 
 const handleOpen = () => setOpen(true); 
 const handleClose = () => setOpen(false); 


    return (
        <div>
                
            <EditIcon

            onClick={handleOpen}/> 
       <Modal 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description" 
        className='modal1'
      > 
        <Box className="modal"> 
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <img src={logo} className='bioLogo'></img> */}
            <p className='Title1'>Изменить БИО</p>
            <div>
              <p className='info1'>Bio</p>
<input type="text" name="" id="" placeholder='about me'  onChange={(e)=> setBioED(e.target.value)} /> 
</div>
<div>
<input type='submit' onClick={handleEdit} value="Отправить" className='button' />
</div>
          </Typography> 

        </Box> 
      </Modal> 
          </div> 
      
    );
};

export default BioEdit;