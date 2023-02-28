import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import PrivateRoute from "./components/common/PrivateRoute";
import VideosPage from "./pages/Videos";
/* import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import VideoDetailsPage from "./pages/VideoDetailsPage";
import VideosPage from "./pages/VideosPage"; */

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PrivateRoute component={<VideosPage />} />,
      },
      /* {
        path: "/videos",
        element: <VideosPage />,
      },
      {
        path: "/videos/:id",
        element: <VideoDetailsPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      }, */
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
