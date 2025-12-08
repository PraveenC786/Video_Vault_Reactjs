import React from 'react'

import "./global.css"
import { RouterProvider } from 'react-router-dom'

import { crudpath } from './routing/route'

const App = () => {
  return (
    <RouterProvider router={crudpath}>

    </RouterProvider>
  )
}

export default App

/**
 * npm i react-icons
 * npm i react-router-dom 
 * npm i axios
 * npm i json-server 
 * npm i react-hot-toast
 * To run videos
 * npx json-server --watch backend/videos.json --port 4000
 * 
 * npx json-server --watch backend/register.json --port 8000 
 * 
 */