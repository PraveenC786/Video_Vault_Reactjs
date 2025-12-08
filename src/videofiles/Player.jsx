import React, { useRef, useState } from "react";
import style from "./videos.module.css";

const Player = (props) => {
  let { video, title ,desc , subscriber} = props;

  let videoRef = useRef(); // used to target our video tag, so inside video tag pass the ref variable.
  console.log(videoRef); // {current: undefined}

  // to play/pause the Video
  let [play, setPlay] = useState(true);
  //to mute/unmute the video
  let [muteVideo, setMuteVideo] = useState(true);

  let playOrpause = () => {
    videoRef.current.autoplay = true;
    if (play === true) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setPlay(!play); // true =>flase , false => true
  };

  let muteOrunmute = () => {
    videoRef.current.muted = muteVideo; // true
    console.log("muteVideo", muteVideo);
    setMuteVideo(!muteVideo);
  };

  // controls: false
  let [videoControls, setVideoContols] = useState(true);

  let showControls = () => {
    videoRef.current.controls = videoControls;
    console.log("videoControls", videoControls);
    setVideoContols(!videoControls);
  };

  return (
    <main className={style.bigContainer}>
      <h1 className={style.video_player_title}>Video Player</h1>
      <video
        src={video}
        ref={videoRef}
        className={style.leftVideo}
        onClick={playOrpause}
      >
        {" "}
      </video>

      <h2 className={style.video_title}>TITLE : {title}</h2>

      <section>
        <h3>DESCRIPTION : </h3>
        <p>{desc}</p>
        
        <h5 className={style.subs}>SUBSCRIBERS : {subscriber}</h5>
      </section>

<section className={style.manage_video_btn_group}>

      <button
        onClick={() => {
          videoRef.current.autoplay = true;
          // play button function
          videoRef.current.play();
        }}
        className={style.btn}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current.pause();
        }}
        className={style.btn}
      >
        Pause
      </button>

      <button onClick={muteOrunmute} className={style.btn}>
        {muteVideo == true ? "Mute" : "Unmute"}
      </button>
      <button onClick={showControls} className={style.btn}>
        {videoControls == true ? "show Controls" : "hide Controls"}
      </button>
</section>
    </main>
  );
};

export default Player;
