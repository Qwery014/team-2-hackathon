import React, { useReducer } from "react";
import axios from "axios";
import { ContactSupportOutlined } from "@mui/icons-material";


export const postContext = React.createContext();
// export const usePost = useContext(postContext)

const INIT_STATE = {
  post: [],
  pages: 0,
  //   categories: [],
  onePost: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        post: action.payload,
        // pages: Math.ceil(action.payload.count / 5),
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_ONE_POST":
      return { ...state, onePost: action.payload };
    default:
      return state;
  }
}

const API = "http://34.125.224.223";

const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getPost() {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      const res = await axios(
        `${API}/fanfic/${window.location.search}`,  //RAUF
        config
      );
      console.log('qwertyu')

      dispatch({
        type: "GET_POST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
    console.log('jessica')
 

  }

  async function createPost(newProduct, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/fanfic/`, newProduct, config); //RAUF
      console.log(res);
      // navigate("/");
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

  // async function getCategories() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("token"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/category/list/`, config);  //RAUF
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: res.data.results,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function deletePost(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/fanfic/${id}/`, config); //RAUF
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

  async function toggleLike(likedProduct, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/fanfic/${id}/likes/`, likedProduct, config);
      console.log(res)

      const { data } = await axios(`${API}/fanfic/${id}/`)
      console.log(data)
      getPost();
    } catch (err) {
      console.log(err);
    }
  }


  async function deleteLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/fanfic/${id}/likes/`, config);
      console.log(res)
      getPost();
    } catch (err) {
      console.log(err);
    }
  }

  async function editFanficPost(edittedProduct, id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };

      await axios.patch(`${API}/fanfic/${id}/`, edittedProduct, config);
      getPost();
    } catch (error) {
      console.log(error)
    }
  }


  const getPostDetails = async (id) => {
    try {
      console.log(id)

      const { data } = await axios(`${API}/fanfic/${id}`);

      dispatch({
        type: "GET_ONE_POST",
        payload: data,
      });

      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <postContext.Provider
      value={{
        post: state.post,
        pages: state.pages,
        categories: state.categories,
        onePost: state.onePost,

        getPostDetails,
        getPost,
        createPost,
        // getCategories,
        deletePost,
        toggleLike,
        editFanficPost,
        deleteLike
      }}
    >
      {children}
    </postContext.Provider>
  );
};

export default PostsContextProvider;

