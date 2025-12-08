import React from 'react'
import { FaSearch } from "react-icons/fa";
const Search = ({handleSearch}) => {
  return (
    <div className='searchBar'>
        <input 
        type="text"  
        placeholder='Search with title' 
        onInput={(e)=>handleSearch(e.target.value)}
        />
        <FaSearch id='searchicon' />
    </div>
  )
}

export default Search