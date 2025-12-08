import React from 'react'
import style from './videos.module.css'

const VideoItem = (props) => {

  let {item,setTitle,setVideo , setDesc, setSubscriber}=props
  let {thumbnailUrl, title, videoUrl , description ,subscriber } = item

  let changeVideo =()=>{
    setTitle(title)
    setVideo(videoUrl)
    setDesc(description)
    setSubscriber(subscriber);
  }
  return (
    <main>

    <div>
    <img src={thumbnailUrl} 
    className={style.rightimg} 
    onClick={changeVideo}
    alt="no video available" />

    <h2>{title}</h2>
    <hr />
    </div>
    </main>
  )
}

export default VideoItem