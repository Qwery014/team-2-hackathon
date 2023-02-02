import React, { useState, useContext } from "react";
import axios from "axios";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://34.125.224.223/api/v1";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState("");
  const [errorTextRegContext, setErrorTextRegContext] = useState("")

  async function handleRegister(formData, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/register/`, formData);
      console.log(res);
      navigate("/login");
      setError("")
    } catch (err) {
      console.log("ERROR", err);
      console.log("ERROR DATA", err.response.data);
      setError(Object.values(err.response.data).flat(2));
      console.log(error)
      // setErrorTextReg()
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData, username, navigate) {
    setLoading(true);
    try {
      const res = await axios.post(`${API}/accounts/login/`, formData);
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      // localStorage.setItem("user_state", executor);
      setCurrentUser(username);
      navigate("/");
      console.log(res);
    } catch (err) {
      console.log(err.response.data.detail);
      setError([err.response.data.detail]);
    } finally {
      setLoading(false);
    }
  }
  // const getProfile = async () => {
  //   const Authorization = `Bearer ${token.access}`;

  //   await axios(`${API}user_account/profile/`, {
  //     headers: { Authorization },
  //   }).then((res) => {
  //     setUser(res.data);
  //   });
  // };

  function handleLogout(navigate) {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setCurrentUser(false);
    navigate("/");
  }

  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        errorTextRegContext,
        setError,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;