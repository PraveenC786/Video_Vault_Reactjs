// npm i react-router-dom

import { createBrowserRouter } from "react-router-dom";

import Notfound from "../crudfiles/NotFound"

import Layout from './Layout';

// Videos
import Videos from "../videofiles/Videos";
import AddInfo from "../crudfiles/AddInfo";
import EditInfo from "../crudfiles/EditInfo";
import Videodata from "../crudfiles/Videodata";
import AllVideos from "../searchfiles/AllVideos";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import PrivateRoute from "../authentication/PrivateRoute";
import ViewUsers from "../crudfiles/ViewUsers";


export let crudpath = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                path : "/addinfo",
                element : <PrivateRoute> 
                <AddInfo/>
                </PrivateRoute>                     
            },
            {
                path : "/editinfo/:id",
                element : <EditInfo/>
            },
            {
                path : "/videodata",
                element : 
                    <PrivateRoute>                 
                <Videodata/>
                </PrivateRoute>            
            },
            {
                path : "/videos",
                element : <PrivateRoute> 
                <Videos/>
                </PrivateRoute>                               
            },
            {
                path : "/allvideos",
                element : <PrivateRoute> 
                <AllVideos/>
                </PrivateRoute>                                
            },
            {
                path : "/viewUsers",
                element : <PrivateRoute> 
                <ViewUsers/>
                </PrivateRoute>                                
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "*",
                element : <Notfound/>
            },
        ]
    }
])

/**
 * createBrowserRouter
 * is in the form of [{},{},...] Array of Objects
 */