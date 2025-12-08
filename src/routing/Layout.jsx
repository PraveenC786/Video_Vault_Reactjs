import React from 'react'
import { Link , NavLink, Outlet} from 'react-router-dom'
import Navbar from '../crudfiles/Navbar'
import { Toaster } from 'react-hot-toast'

const Layout = () => {

  let active_style =({isActive})=>{
      return{
        color : isActive ? "#f2f2f2" : "#edf513ff",
        background : isActive ? "#1b5a7a" : "#1aa59a"
      }
  }

  return (
    <>
      <Navbar/>
      <Toaster/>
      
      <main className='layout'>
        <section className='sidebar'>
          <ul>
            <li>
              <NavLink to={"/addinfo"} style={active_style}>AddInfo</NavLink>
            </li>
            <li>
              <NavLink to={"/videodata"} style={active_style} >Videodata</NavLink>
            </li>
            <li>
              <NavLink to={"/videos"} style={active_style} >Videos</NavLink>
            </li>
            <li>
              <NavLink to={"/allvideos"} style={active_style} >All Videos</NavLink>
            </li>
            <li>
              <NavLink to={"/viewUsers"} style={active_style} >ViewUsers</NavLink>
            </li>
          </ul>
        </section>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout