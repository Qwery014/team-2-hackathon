import React, { useContext, useEffect, useState } from "react";
import { postContext } from "../../contexts/PostsContextProvider";
import { fanficContext } from "../../contexts/FanficContextProvider"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/Лого.svg'
// Modal


const Fanfics = ({ post }) => {
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
  const { getFanfic } = useContext(fanficContext)
  const { editFanficPost } = useContext(postContext);
  const { deletePost, toggleLike, deleteLike } = useContext(postContext);
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // Modal

  // Edit
  // Edit states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");
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
  // console.log(post)

  const [like, setLike] = useState(true);


  const [owner, setOwner] = useState(false)


  function isOwner() {
    const login = (localStorage.getItem("username"));
    console.log(window.location.pathname)
    if (window.location.pathname == "/profile") {
      if (login == post.owner) {
        setOwner(true)
      }
    } else if (window.location.pathname == "/fanfic") {
      setOwner(true);
    }
  }

  useEffect(() => {
    isOwner()
  }, [])


  function handleLike() {
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

  // console.log(post)


  //navigate 
  const navigate = useNavigate()
  return <>

    {
      owner ? (
        <div className='hp_fanfics-Cont '>

          <div className='hp_fanfics'>
          {/* <h2 className='AllNewsMainTitle'>{post.genre}</h2> */}
            <div className='hp_fanfics-cont'>
              <p className='hp_fanfecs-hesh'>#{post.title}</p>
              <div className='hp_fanfics-desc'>
                #{post.description} 
              <p className='hp_fanfics-data'>
                {post.date_created}
              </p>
              </div>
              <img src={post.image} alt="" className='hp_fanfics-mainImg' />

    <button onClick={() => navigate(`/fanficpage/${post.id}`)} className="fanfic-read-btn">Начать читать</button>
              <div className='hp_fandics-CardBottom'>

                <div className='hp-fanfics-account'>
                  <img src="/accountIMG.png" alt="" className='hp_fandics-accImg' />
                  <p className='hp_fandics-User'>{post.owner}</p>
                </div>

                <div className='hp_fandics-LikeComment'>
                  <p className='hp_fandics-LikeCount'>{post.likes}</p>
                  {/* <img src="https://cdn-icons-png.flaticon.com/512/4202/4202475.png" alt="" className='Allnewslikeicon'onClick={() => handleLike()} /> */}
                  {like ? <img src="https://cdn-icons-png.flaticon.com/512/4202/4202475.png" className='Allnewslikeicon' onClick={() => handleLike()} /> : <img src="https://cdn-icons-png.flaticon.com/512/4202/4202509.png" className='Allnewslikeicon' onClick={() => handleLike()} />}
                  <p className='hp_fandics-CommentCount'>{post.commentaries_count}</p>
                  <img src="CommentsIcon.png" alt=""
                    className='allnewsCommentIcon' onClick={()=> navigate(`/fanficpage/${post.id}`)} />
                </div>
              </div>
            </div>
        
            {/* <button onClick={() => handleLike()}>
            {like ? <p> лайкнуто ежже</p> : <p> не лайкнуто ежже</p>}
          </button> */}
            <Button className="modal-btn" onClick={handleOpen}>Open modal</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">

                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {/* <li className='Navbar__logo register-logo'><img src="../../" alt="" /></li> */}
                    <input
                      type="text"
                      placeholder="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="profile-inp"
                    />
                    <input
                      type="text"
                      placeholder="desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="profile-inp"
                    />
                    <input
                      type="text"
                      placeholder="genre"
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="profile-inp"
                    />
                    <input
                      type="file"
                      name="photo"
                      id=""
                      multiple
                      accept=".jpg"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="profile-inp"
                    />
                    <button onClick={handleEditInp} className="profile-inp btn-submit" >Сохранить</button>
                  </Typography>
                </Typography>
              </Box>
            </Modal>
            <img src="https://cdn-icons-png.flaticon.com/512/484/484560.png" onClick={() => deletePost(post.id)} className="fanfic-delete-btn"/>
          </div>
        </div>
      ) : (
        console.log("kfoeooeo")
      )
    }




  </>
}

export default Fanfics;