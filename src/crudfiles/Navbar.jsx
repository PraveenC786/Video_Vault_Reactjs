import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
 let navigate = useNavigate()

  let token = localStorage.getItem("TOKEN")
  
  let handleLogout=()=>{
    localStorage.removeItem("TOKEN")
    navigate("?login")
  }
  return (
    <nav>
            <h1 className='logo'>Praveen <span>ViewPro</span></h1>
        {
          token ?
           <div className='reg_login_btn'>
            <button onClick={handleLogout} className='logout_btn'> Logout</button>
           </div> :

        <div className='reg_login_btn'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
        }

    </nav>
  )
}

export default Navbar