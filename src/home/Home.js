import React, { useState } from 'react'
import axios from 'axios'
import "./home.css"
export default function Home() {
    const [search, setSearch]= useState("")
    const [data, setData]= useState()
    const getStreams =async()=>{
        await axios.get(`http://localhost:5000/all?stream=${search.searchFor}`)
            .then((res)=>{console.log(res)})
            .catch(console.error)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(search)
        getStreams().then(()=>{console.log(data)})
    }
    const handleChange = ({ target }) => {
        setSearch({
          ...search,
          [target.name]: target.value,
        });
      };
  return (
<div className='mainDiv'>
    <h1>Streams R Us</h1>
    <form onSubmit={handleSubmit}>
        <label>
          Desired Live Event:
          <input type="text" name="searchFor" value={search.searchFor} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* <h4>{data}</h4> */}
</div>
  )
}
