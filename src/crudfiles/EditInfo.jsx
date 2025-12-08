import React, { useEffect, useState } from 'react'
import axios from '../modifiedAxios';

import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditInfo = () => {

// useParams helps to extract the parameter form the URL like suppose /editUser/1 (i.e /edituser/:id)
  let data = useParams()  // returns an object
  console.log(data); // { id : "1" } key:value pair
  let {id} = data

  let navigate = useNavigate()

  let [state, setState] = useState({
      title: "",
      thumbnailUrl: "",
      author: "",
      videoUrl: "",
      description: "",
      subscriber: "",
    });
  
    let { title, thumbnailUrl, author, videoUrl, description, subscriber } =
      state;
  
    let handleChange = (e) => {
      let { name, value } = e.target;
      setState({ ...state, [name]: value });
    };

    useEffect(()=>{
      axios.get(`/videos/${id}`)
      .then((response)=>{
        console.log(response.data);
        setState(response.data)
      })
    },[])

    let handleSubmit =(e)=>{
      e.preventDefault()
      let payload = state
      axios.put(`/videos/${id}`, payload)
      navigate("./videodata")
      toast.success("Data is successfully updated")
    }

  return (
    <>
    <main className="content">
      <h1>EditInfo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="input1">Title</label>
          <input
            type="text"
            id="input1"
            placeholder="Enter title of video"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2">ThumbnailUrl</label>
          <input
            type="text"
            id="input2"
            placeholder="Enter thumbnailUrl of video"
            name="thumbnailUrl"
            value={thumbnailUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Author</label>
          <input
            type="text"
            id="input3"
            placeholder="Enter author of video"
            name="author"
            value={author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input4">VideoUrl</label>
          <input
            type="text"
            id="input4"
            placeholder="Enter videoUrl of video"
            name="videoUrl"
            value={videoUrl}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input5">Description</label>
          <input
            type="text"
            id="input5"
            placeholder="Enter description of video"
            name="description"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input6"> subscriber </label>
          <input
            type="text"
            id="input6"
            placeholder="Enter subscriber of video"
            name="subscriber"
            value={subscriber}
            onChange={handleChange}
          />
        </div>
        <button>Edit videodata</button>
      </form>
    </main>


    </>
  )
}

export default EditInfo