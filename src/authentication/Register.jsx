import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

//npx json-server --watch backend/register.json --port 8000 
const Register = () => {

    let [registeredUsers,setRegisteredUsers] = useState({
        email : "",
        password : "",
        image : ""
    })

    let {email,password,image} = registeredUsers

    let navigate = useNavigate()

    // let handleChange = ()=>{}
    // let handleSubmit = ()=>{}
    let handleChange = (e)=>{
        let {name , value}= e.target
        setRegisteredUsers(
            {...registeredUsers , [name]:value}
        )
    }
    let handleSubmit = async (e)=>{
        e.preventDefault()
        let payload = registeredUsers
        // await axios.post("http://localhost:8000/registered_users",payload)
        await axios.post("/api/db", payload);        
        navigate("/login")
        toast.success("Registered Successfully!!")
        
    }
  return (
    <>
     <main className="reg_login_form">
    <h1>Register</h1>
      
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
        <div className="form-group">
          <label htmlFor="input3">Profile picture</label>
          <input
            type="url"
            id="input3"
            placeholder="Enter image url"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </div>
        
        <button>Register</button>

        <p className='redirectlink'>Already have an Account  <Link to='/login'>Login</Link></p>
      </form>
    </main>
    </>
  )
}

export default Register