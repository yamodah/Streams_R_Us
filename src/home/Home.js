import React, { useState } from 'react'
import "./home.css"
export default function Home() {
    const [search, setSearch]= useState("")
    const [data, setData]= useState()
    const handleSubmit=(e)=>{
        e.preventDefault()

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
          <input type="text" value={search.searchFor} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
</div>
  )
}
