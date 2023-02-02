import axios from 'axios';
import React, { useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

export const newsContext = React.createContext();


const INIT_STATE = {
  news: [],
  newsDetails: {},
 
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, news: action.payload };
    case "GET_NEWS_DETAILS":
      return { ...state, newsDetails: action.payload }
    default:
      return state;
  }
}

const API_NEWS = "http://34.125.224.223";

const NewsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getNews() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API_NEWS}/news/${window.location.search}`,  //RAUF
        config
      );
     

      dispatch({
        type: "GET_NEWS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
    console.log('getnews')
 

  }

  async function createNews(newNews, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API_NEWS}/news/`, newNews, config); //RAUF
      console.log(res);
      // navigate("/");
      getNews();
    } catch (err) {
      console.log(err);
    }
  }

 

  async function deleteNews(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API_NEWS}/news/${id}/`, config); //RAUF
      getNews();
    } catch (err) {
      console.log(err);
    }
  }


  async function editNewsPost(edittedNewsPost, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.patch(`${API_NEWS}/news/${id}/`, edittedNewsPost, config);
      getNews();
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <newsContext.Provider
      value={{
     news: state.news,
     newsDetails: state.newsDetails,
     getNews,
     createNews,
     deleteNews,
     editNewsPost
      }}
    >
      {children}
    </newsContext.Provider>
  );
};

export default NewsContextProvider;

