import React from 'react'

const DisplayVideoData = (props) => {
    console.log(props);
    let {videos} = props
    console.log(videos);
    let {title , author}= videos

  return (
    <section className='video_cart'>
        <h2 className='title'>Title : {title}</h2>
        <h2>Author : {author}</h2>
    </section>
  )
}

export default DisplayVideoData