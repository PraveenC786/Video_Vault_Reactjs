import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from '../modifiedAxios'
import DisplayVideoData from './DisplayVideoData'

const AllVideos = () => {

    let [state,setState] = useState([])
    let [searchTerm , setSearchTerm] = useState("")

    // term => the term that user is searching for 
    let handleSearch = (term)=>{
      setSearchTerm(term)
    }

    let fetchuser = async ()=>{
      let response = await axios.get("/videos")
      console.log(response.data);
      setState(response.data)
    }
    useEffect(()=>{
      fetchuser()
    },[])

    // state.filter(()=>{}).map(()=>{})
    let filteredData = state.filter((value)=>{
      if(searchTerm === "") { return value }
      else if(value.title.toLowerCase().includes(searchTerm.toLowerCase())) { return value}
    }).map((videos)=><DisplayVideoData videos= {videos} key={videos.id}/>)

  return (
    <main className='search_page'>
    {/* <img src="https://th.bing.com/th/id/R.0bf2d7afd9bf8d6fee469da901418b50?rik=WGYs1%2fKZU%2biaTQ&riu=http%3a%2f%2fst2.depositphotos.com%2f1654249%2f5234%2fi%2f450%2fdepositphotos_52344867-stock-photo-3d-man-standing-and-holding.jpg&ehk=sSR4cKQR5XiRaWz839W9HUP6iAjbhUod7SMJNOvvDas%3d&risl=&pid=ImgRaw&r=0" className='searchimg' /> */}
    <section className='search_container'>
    <Search handleSearch = {handleSearch}/>

    {
      state == [] ? "Loading..." : filteredData
    }
    </section>
    </main>
  )
}

export default AllVideos


