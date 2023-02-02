import axios from 'axios';
import React, { createContext, useReducer } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
export const mangaContext = createContext();

const INIT_STATE = {
  mangas: [],
  mangaGenres: [],
  mangaDetail: {},
  mangaChapters: [],
  mangaChapterImgs: {}
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_MANGAS":
      return {
        ...state,
        mangas: action.payload
      };
    case "GET_MANGA_GENRES":
      return {
        ...state,
        mangaGenres: action.payload,
      }
    case "GET_MANGA_DETAIL":
      return {
        ...state,
        mangaDetail: action.payload,
      }
    case "GET_MANGA_CHAPTERS":
      return {
        ...state,
        mangaChapters: action.payload,
      }
    case "SET_MANGA_CHAPTER_READ":
      return {
        ...state,
        mangaChapterImgs: action.payload,
      }
  }
}

const API = "http://34.125.224.223";

const MangaContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const location = useLocation();

  async function getManga() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };


      const { data } = await axios(`${API}/manga/${window.location.search}`, config);

      dispatch({
        type: "GET_MANGAS",
        payload: data,
      })

    } catch (error) {
      console.log(error)
    }
  }


  async function getGenres() {
    try {

      const { data } = await axios(`${API}/mangagenres/${window.location.search}`);


      dispatch({
        type: "GET_MANGA_GENRES",
        payload: data
      })
    } catch (error) {
      console.log(error)
    }
  }


  async function setMangaDetail(id) {
    try {
      const { data } = await axios(`${API}/manga/${id}/`);

      dispatch({
        type: "GET_MANGA_DETAIL",
        payload: data
      })
    } catch (error) {
      console.log(error);
    }
  }

  async function addLikeToManga(likedManga, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.post(`${API}/manga/${id}/likes/`, likedManga, config);
      console.log(res)

      setMangaDetail(id);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteLikeAtManga(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios.delete(`${API}/manga/${id}/likes/`, config);
      console.log(res)
      setMangaDetail(id);
    } catch (err) {
      console.log(err);
    }
  }

  async function addComment(newComment, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const { data } = await axios.post(`${API}/manga/${id}/comment/`, newComment, config);
      setMangaDetail(id);
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteComment(comment, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const { data } = await axios.delete(`${API}/manga/${id}/comment/`, comment, config);
      console.log(data)
      setMangaDetail(id);
    } catch (error) {
      console.log(error);
    }
  }

  async function getMangaChapters(id) {
    try {

      const { data } = await axios(`${API}/manga/${id}/volumes/`);
      console.log(data)
      dispatch({
        type: "GET_MANGA_CHAPTERS",
        payload: data
      })

    } catch (error) {
      console.log(error)
    }
  }

  async function setMangaToRead(id) {
    try {
      const { data } = await axios(`${API}/mangachapter/${id}/`);
      console.log(data);

      dispatch({
        type: "SET_MANGA_CHAPTER_READ",
        payload: data,
      })
    } catch (error) {
      console.log(error);
    }
  }





  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(location.search);
    console.log(value)
    if (value === 'all') {
      search.delete(query)
    } else {
      search.set(query, value)
    }

    const url = `${location.pathname}?${search.toString()}`
    navigate(url)

  }


  return (
    <mangaContext.Provider
      value={{
        mangas: state.mangas,
        mangaGenres: state.mangaGenres,
        mangaDetail: state.mangaDetail,
        mangaChapters: state.mangaChapters,
        mangaChapterImgs: state.mangaChapterImgs,

        getManga,
        getGenres,
        setMangaDetail,
        addLikeToManga,
        deleteLikeAtManga,
        addComment,
        deleteComment,
        getMangaChapters,
        setMangaToRead,
        fetchByParams
      }}
    >
      {children}
    </mangaContext.Provider>
  );
};

export default MangaContextProvider;