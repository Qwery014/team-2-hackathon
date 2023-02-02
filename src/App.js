import './App.css';
import MainRoutes from "./MainRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/AuthContextProvider';
import PostsContextProvider from './contexts/PostsContextProvider';
import FanficContextProvider from './contexts/FanficContextProvider';
import AnimeContextProveder from './contexts/AnimeContextProveder';
import NewsContextProvider from './contexts/NewsContextProvider';
import MangaContextProvider from './contexts/MangaContextProvider';
import BioContextProvider from './contexts/BioContextProvider';


function App() {
  return (
    <>

                  <BrowserRouter>

      <AuthContextProvider>
        <BioContextProvider>
  


   
                <PostsContextProvider>
        <NewsContextProvider>
          <MangaContextProvider>
            <FanficContextProvider>
              <AnimeContextProveder>



                    <MainRoutes />


              </AnimeContextProveder>
            </FanficContextProvider>
          </MangaContextProvider>
        </NewsContextProvider>
                </PostsContextProvider>
              
                </BioContextProvider>
      </AuthContextProvider>

                  </BrowserRouter>



    </>
  );
}

export default App;
