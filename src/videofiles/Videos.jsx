import React, { useEffect, useState } from 'react'
import Player from './Player';
import VideoItem from './VideoItem';

import style from './videos.module.css'
import axios from 'axios';

// import Videodata from './videos.json'


const Videos = () => {
  let [state, setState] = useState([])
  let [video, setVideo] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    let [title, setTitle] = useState( "Big Buck Bunny")

    let description =  "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org";
  
    let [desc , setDesc] = useState(description);

    // subscriber
    let [subscriber, setSubscriber]  = useState("25254545");

    // for fetching the data we need useEffect Hook.
    useEffect(()=>{
      axios.get("http://localhost:4000/videos")
      .then((response)=>{
        console.log(response.data);
        setState(response.data);
      })
    },[])

  return (
    <main className={style.videoBlock}>   
      <aside className={style.left}>
        <Player video = {video} title={title} desc={desc} 
          subscriber ={subscriber}
        />
      </aside>
      <aside className={style.right}>
      {
        state.map((item)=>{
          return <VideoItem key={item.id} item={item} setTitle={setTitle} setVideo={setVideo} setDesc={setDesc}
            setSubscriber = {setSubscriber}
          />
        })
      }
      </aside>
    </main>
  )
}

export default Videos