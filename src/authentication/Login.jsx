import axios from 'axios'
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let [loginData ,setLoginData] = useState(
    {
      email: "",
      password : "",
      token : uuidv4()
    }
  )

  let {email,password, token} = loginData
  let navigate = useNavigate()

  let handleChange =(e)=>{
    let {name,value} = e.target
    setLoginData({...loginData , [name]:value})
  }


  let handleSubmit = async (e) =>{
    e.preventDefault()

    let response = await axios.get("http://localhost:8000/registered_users")
    console.log(response);
    let {data}  = response

    let filteredData = data.filter((user)=>{
      return(
        user.email === loginData.email 
        && user.password === loginData.password 
      )
    })
    
    //user has successfully logged in 
    if(filteredData.length > 0){
      navigate("/videodata")
      localStorage.setItem("TOKEN" , token)
      toast.success("Logged in successfully!")
    }else{
      Navigate("/register")
      toast.error("Something went wrong..")
    }
  }
  return (
    <main className='content'>

    <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Email</label>
          <input
            type="email"
            id="input1"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Password</label>
          <input
            type="password"
            id="input2"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        
        
        <button>Login</button>
      </form>
    

    </main>
  )
}

export default Login