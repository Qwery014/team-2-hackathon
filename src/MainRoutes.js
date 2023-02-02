import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FanficMainPage from "./pages/UserPage";
import FanficChapterCreate from "./components/FanficChapters/FanficChapterCreate"
import FanficChapter from "./components/FanficChapters/FanficChapter";
import NewsPage from './pages/NewsPage';
import MangaPage from './pages/MangaPage';
import FanficPage from './pages/FanficPage';
import FriendsPage from './pages/FriendsPage';
import AnimePage from './pages/AnimePage';
import ProfilePage from './pages/ProfilePage';
import EditAnimePage from './pages/EditAnimePage'
import AdminPage from './pages/AdminPage';
import MangaDetail from "./components/MangaPage__Components/MangaDetail";
import MangaRead from "./components/MangaPage__Components/MangaRead";
import FanficChapterCard from "./components/FanficChapters/FanficChapterCard";
import ProfileBio from "./components/Profile/BioCreate";


const MainRoutes = () => {
  const ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },

    {
      link: "/fanfic",
      element: <FanficMainPage />,
      id: 2,
    },
    {
      link: "/fanficpage/:id",
      element: <FanficPage />,
      id: 3,
    },
    {
      link: "/fanficpage/:id/create-fanfic",
      element: <FanficChapterCreate />,
      id: 4,
    },
    {
      link: "/fanfic/chapter/:chName",
      element: <FanficChapterCard />,
      id: 5,
    },

    {
      link: "/News",
      element: <NewsPage />,
      id: 6
    },
    {
      link: "/manga",
      element: <MangaPage />,
      id: 7
    },
    {
      link: "/manga/:id",
      element: <MangaDetail />,
      id: 9
    },

    {
      link: "/manga/:id",
      element: <MangaDetail />,
      id: 10
    },
    {
      link: "/friends",
      element: <FriendsPage />,
      id: 11
    },

    {

      link: "/anime",
      element: <AnimePage />,
      id: 13
    },
    {
      link: "/profile",
      element: <ProfilePage />,
      id: 14

    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 15
    },
    {
      link: "/manga/:id/:chapter/:page",
      element: <MangaRead />,
      id: 16
    },
    {
      link: "/readchapter/:id",
      element: <FanficChapter />,
      id: 17,
    },
    {
  link: "/editAnime/:id",
  element: <EditAnimePage />,
  id:18
},

{
  link: "/profileBio",
  element: <ProfileBio/>,
  id: 19
},
  ]


  return (
    <Routes>
      {ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
