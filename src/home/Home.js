import React, { useState } from 'react'
import axios from 'axios'
import "./home.css"
export default function Home() {
    const [search, setSearch]= useState("")
    const [data, setData]= useState({event:"", links:[]})
    const getStreams =async()=>{
        await axios.get(`https://yamodahstreams.herokuapp.com/all?stream=${search}`)
            .then((res)=>{setData(res.data)})
            .catch(console.error)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(search)
        getStreams().then(()=>{console.log(data)})
    }
    const handleChange = ({ target }) => {
        setSearch(target.value);
      };
    
    const linksHTML = data.links.map((pack,index)=>{
            if(pack.site ==="ROJA"){
                // console.log(pack)
                return pack.streams.map((link, index)=><><a href={link} target="_blank" rel="noopener noreferrer" key={index}>{pack.site}:{index}</a><br/></>)
            }

            return <><a href={pack.streams} target="_blank" rel="noopener noreferrer" key={index}>{pack.site}</a><br/></>
        })
    
  return (
<div className='mainDiv'>
    <h1>Streams R Us</h1>
    <form onSubmit={handleSubmit}>
        <label>
          Desired Live Event:
          <input type="text" name="searchFor" value={search} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {data.event&&<h4>{data.event}</h4>}
      {data.links.length ?linksHTML:<h3>Your links await you ...</h3>}
</div>
  )
}
