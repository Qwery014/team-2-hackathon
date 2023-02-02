import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Profile/Profile.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProfileBio from "./ProfileBio";
import { postContext } from '../../contexts/PostsContextProvider';
import { useSearchParams } from 'react-router-dom';

const ProfileCard = () => {
  const { id } = useParams();

  // console.log(id)
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const navigate = useNavigate
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  };

  const { getPost, categories, getCategories, createPost } = useContext(postContext);

  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [genres, setGenres] = useState('');
  const [desc, setDesc] = useState('');
  const [dataCreated, setDataCreated] = useState('')
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSave() {
    let newProduct = new FormData();

    newProduct.append("title", title);
    newProduct.append("image", image)
    newProduct.append("description", desc);
    newProduct.append("genre", genres);
    createPost(newProduct, navigate)
    console.log(title, image, desc, dataCreated, genres)

  }
//   const  modalStyle = {
// background : "url('./ProfileImg/bg.png')",

//   }
  return (
    <>




        <ProfileBio/>

    

        <button className="addfanfic" onClick={handleOpen}>Фанфики</button>
        
        <Modal
       
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <input className="profile-inp" type="text" name="" id="" placeholder='Добавить фанфик' value={title} onChange={(e) => setTitle(e.target.value)} />
<input className="profile-inp" type="text" name="" id="" placeholder='desc' value={desc} onChange={(e) => setDesc(e.target.value)} />
<input className="profile-inp" type="text" name="" id="" placeholder='genres' value={genres} onChange={(e) => setGenres(e.target.value)} />
{/* <input type="date" name="" id="" value={dataCreated} onChange={(e)=> setDataCreated(e.target.value)} /> */}
<input className="profile-inp" type="file" name="photo" id='' multiple accept="image/*" onChange={e => setImage(e.target.files[0])} />
<input className="profile-inp btn-submit" type='submit' onClick={handleSave} value="Отправить"></input>
          </Typography>
         
        </Box>
      </Modal>

   
    </>
  );
};

export default ProfileCard;

