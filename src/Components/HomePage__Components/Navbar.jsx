import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import logo from '../../assets/Лого.svg'
import FaceBook from '../../assets/Facebook.png'
import Twitter from '../../assets/Twitter.png'
import Instagram from '../../assets/Instagram.png'
import Settings from '../../assets/Settings.png'
import Ellipse from '../../assets/Ellipse 1.png'
import { Link } from 'react-router-dom'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useAuth } from "../../contexts/AuthContextProvider";
import { useSearchParams } from "react-router-dom";
import { fanficContext } from "../../contexts/FanficContextProvider";
import { mangaContext } from "../../contexts/MangaContextProvider";
import '../../Styles/HomePage2.css'
import '../../Styles/ModalRegister.css'
const Navbar = () => {
  const { handleRegister, error, setError, handleLogin, handleLogout, errorTextRegContext } = useAuth();
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openLog, setOpenLog] = useState(false);
  const handleOpenLogin = () => setOpenLog(true);
  const handleCloselogin = () => setOpenLog(false)

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
  function openLoginModal() {
    if (handleOpen) {
      handleClose()
      handleOpenLogin()
      setError("")
    }
  }

  function idinah() {
    if (openLog) {
      handleCloselogin()
      handleOpen()
      navigate('/')
      ("setError")
    }
  }


  //register modal
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [secretWord, setSecretWord] = useState("")
  const [errorTextReg, setErrorTextReg] = useState("");
  const [errorTextLog, setErrorTextLog] = useState("");
  // const [executor, setExecutor] = useState("");

  // const { handleRegister } = useAuth();


  function handleSave() {
    if (
      !name.trim() ||
      !lastName.trim() ||
      !username.trim() ||
      !pass.trim() ||
      !passConfirm.trim() ||
      !secretWord.trim()
    ) {
      // alert("Some inputs are empty!");
      setErrorTextReg("Some inputs are empty!");
    } else {
      console.log("HELLO", passConfirm);
      let formData = new FormData();
      formData.append("name", name);
      formData.append("last_name", lastName);
      formData.append("username", username);
      formData.append("password", pass);
      formData.append("password2", passConfirm);
      formData.append("secret_word", secretWord)
      setErrorTextReg("")
      console.log(formData);
      handleRegister(formData);
    }
  }
  function cleanRegister() {
    setName("");
    setLastName("");
    setUsername("");
    setPass("");
    setPassConfirm("");
    secretWord("")
  }

  useEffect(() => {
    setError(false);
  }, []);

  //



  //login
  const [login, setLogin] = useState("")
  const [passLog, setPassLog] = useState("")
  function handleAuth() {
    let formData = new FormData();
    formData.append("username", login);
    formData.append("password", passLog);

    handleLogin(formData, login, navigate);
  }

  useEffect(() => {
    setError(false);
  }, []);

//search

const {getManga} = useContext(mangaContext)
const {getFanfic} = useContext(fanficContext)

const [searchParams, setSearchParams] = useSearchParams();
const [search, setSearch] = useState(searchParams.get("q") || "");

console.log(search, "search");

useEffect(() => {
  setSearchParams({
    q: search,
  });
}, [search]);

useEffect(() => {
  getManga();
  getFanfic()
  // setPage(1)
}, [searchParams]);



  return (
    <div>
      <header >
        <ul className='navbar'>
          <Link to="/Admin">
            <li className='Navbar__logo'><img src={logo} alt="" /></li>
          </Link><li><input type="text" placeholder='Поиск аниме,манга,фанфики' /></li>

          <li className='soc'><img src={FaceBook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" /></li>

          <li className='setting'>

            <img src="https://cdn-icons-png.flaticon.com/512/6807/6807188.png" alt="" className="logout" onClick={handleLogout} />
            <img src={Ellipse} alt="" onClick={handleOpen} /></li>



          <Modal

            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

          >
            <Box sx={style} >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <li className='Navbar__logo register-logo'><img src={logo} alt="" /></li>
                {/* <div className="logo-h1">Регистрация</div> */}
                <label htmlFor="user-name" className='register-label'>Введите ваше имя</label>
                <input className="inp-user-name register-inp" placeholder='firstname' id='user-name' value={name}
                  onChange={(e) => setName(e.target.value)} />
                <label htmlFor="user-lastname" className='register-label'>Введите вашу фамилию</label>
                <input className="inp-lastname register-inp" placeholder='lastname' id='user-lastname' value={lastName}
                  onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="login" className='register-label'>Login</label>
                <input className="inp-login register-inp" placeholder='login' id='login' value={username}
                  onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="register-pass" className='register-label'>Введите пароль</label>
                <input type='password' className=" register-inp" id="register-pass"
                  onChange={(e) => setPass(e.target.value)}
                />
                <label htmlFor="register-pass" className='register-label'>Подтвердите пароль</label>
                <input type='password' className=" register-inp" id="register-pass"
                  onChange={(e) => setPassConfirm(e.target.value)}
                />
                <label htmlFor='secret-word' className='register-label'>Secret Word</label>
                <input className="inp-secret-word register-inp" placeholder='secretword' id='secret-word' value={secretWord}
                  onChange={(e) => setSecretWord(e.target.value)} />
                <p className="error-auth">{errorTextReg || error[0]}</p>
                <button className='register-btn' type='submit' onClick={handleSave}>Регистрация</button>
                <p className='register-h2' onClick={openLoginModal}>Вы уже зарегистрированы?</p>

              </Typography>

            </Box>
          </Modal>

        </ul>
        <Modal

          open={openLog}
          onClose={handleCloselogin}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"

        >
          <Box sx={style} >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <li className='Navbar__logo register-logo'><img src={logo} alt="" /></li>

              <label htmlFor="log" className='register-label'>Login</label>
              <input className="inp-login register-inp" placeholder='login' id='login' value={login}
                onChange={(e) => setLogin(e.target.value)} />
              <label htmlFor="user" className='register-label'>Password</label>
              <input className="inp-userpass-confirm register-inp" placeholder='password' id='user-pass-confirm' type="password" value={passLog}
                onChange={(e) => setPassLog(e.target.value)} />
                <p className="error-auth">{errorTextLog || error}</p>
              <button className="custom-btn btn-4" onClick={handleAuth}>
                <span onClick={() => setOpenLog(false)}>Войти</span>
              </button>
              <p className='register-h2' onClick={idinah}>Вы еще не зарегистрированы?</p>

            </Typography>

          </Box>
        </Modal>

      </header>
    </div>
  );
};

export default Navbar;