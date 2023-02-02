import React, { useContext, useState } from "react";
import { postContext } from "../../contexts/PostsContextProvider";
import {fanficContext} from "../../contexts/FanficContextProvider"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
// Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
// Modal

const PostCard = ({ post }) => {
  const {getFanfic } = useContext(fanficContext)
  const { editFanficPost } = useContext(postContext);
  const { deletePost, toggleLike, deleteLike } = useContext(postContext);
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal

  // Edit
  // Edit states
  const [title, setTitle] = useState(post.title || "");
  const [desc, setDesc] = useState(post.description || "");
  const [genre, setGenre] = useState(post.genre || "");
  const [image, setImage] = useState(null);

  const handleEditInp = () => {
    let edittedFanficPost = new FormData();

    edittedFanficPost.append("title", title);
    edittedFanficPost.append("image", image);
    edittedFanficPost.append("description", desc);
    edittedFanficPost.append("genre", genre);

    editFanficPost(edittedFanficPost, post.id);
  };

  // like

  const [like, setLike] = useState(true);


console.log(post)



  function handleLike(){
    if (!like) {
      let likedProduct = new FormData();

      likedProduct.append("title", title);
  
      toggleLike(likedProduct, post.id);
      setLike(true)
      console.log(likedProduct, post.id)
    } else {
     deleteLike(post.id)
     setLike(false)
    }
  }

  // Edit




  //navigate 
const navigate =  useNavigate()

  return (
    <>
      <div className="card mb-3">
        <img src={post.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <h5 className="card-title">{post.genre}</h5>
          <p className="card-text">{post.description}</p>
          <button onClick={()=>navigate(`/fanficpage/${post.id}`)}>Начать читать</button>
          <button onClick={() => handleLike()}>
            {like ? <p> лайкнуто ежже</p> : <p> не лайкнуто ежже</p>}
          </button>
          {/* {fanfic.is_author ? ( */}
          <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <input
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  />
                  <input
                    type="file"
                    name="photo"
                    id=""
                    multiple
                    accept=".jpg"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <button onClick={handleEditInp}>Сохранить</button>
                </Typography>
              </Box>
            </Modal>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </>
          {/* ) : (
        null
      )} */}
        </div>
      </div>
    </>
  );
};

export default PostCard;
