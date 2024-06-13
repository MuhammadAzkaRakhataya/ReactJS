import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stuff from "./pages/Stuff";
import TrashStuff from "./pages/TrashStuff";
import Inbound from "./pages/Inbound";
import Lending from "./pages/Lending";
import User from "./pages/User";
import TrashUser from "./pages/TrashUser";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/stuffs', element: <Stuff /> },
    { path: '/stuff/trash', element: <TrashStuff /> },
    { path: '/inbound-stuff', element: <Inbound /> },
    { path: '/lending', element: <Lending /> },
    { path: '/user', element: <User /> },
    { path: '/user/trash', element: <TrashUser /> },

])
