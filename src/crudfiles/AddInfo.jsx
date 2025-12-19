import React, { useState } from "react";
import axios from "../modifiedAxios";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const AddInfo = () => {
  let navigator = useNavigate();

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

  let handleSubmit = (e) => {
    e.preventDefault();
    let payload = state;
    // axios.post("/api/db", payload);
    axios.post("/api/db", payload);
    navigator("/videodata");
    toast.success("Data added successfully!");

    // the data you want want to send the server is called payload

    // navigate one page to another by clicking the btn
  };

  return (
    <main className="content">
      <h1>AddInfo</h1>
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
        <button>Add videodata</button>
      </form>
    </main>
  );
};

export default AddInfo;
