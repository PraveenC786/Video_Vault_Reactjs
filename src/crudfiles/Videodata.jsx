import { useEffect, useState } from 'react'
// import axios from 'axios'
import axios from '../modifiedAxios'  // is a default export so , we can import as any name as our wish (i.e. no need to follow the component as it is.)
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Videodata = () => {

  let [videoInfo , setVideoInfo] = useState([])

  function getData(){
    axios.get("/videos")  // modifiedAxios
    .then((response)=>{
      console.log(response.data);
      setVideoInfo(response.data)
    })
  }

  let handleDelete = (id) =>{
    axios.delete(`/videos/${id}`)
    .then(()=>{
      getData()
    })
    toast.success("Data is successfully deleted!")
  }


  useEffect(()=>{
    getData()
  })

  return (

    <section className='vdataBlock'>
        <h1>VideoInfo</h1>
      <table>
        <thead>
          <th>Title</th>
          <th>author</th>
          <th>Subscriber</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
        {
          videoInfo.map((value)=>{
            return(

          <tr key={value.id}>
              <td>{value.title}</td>
              <td>{value.author}</td>
              <td>{value.subscriber}</td>
              <td><Link to={`/editinfo/${value.id}`}> <MdEdit /> </Link> </td>
              <td><span onClick={handleDelete}><MdDelete /></span></td>
          </tr>
            )
          })
        }
        </tbody>
      </table>
      </section>
  )
}

export default Videodata

// useEffect used to fetch the data