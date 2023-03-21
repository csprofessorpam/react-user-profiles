import React from 'react'
import "./Header.css"
import {userdata} from '../../users.js'
//userdata is storage for all users
//should come from database

function Header({setUsers}) {

  const [country, setCountry] = React.useState("")

  const handleSearch = () =>{
    //filter using country
    setUsers(userdata.filter(item=> item.country===country))
  }
  return (
    <div className="header-container">
      <button onClick={()=>setUsers(userdata)}>Show all</button>
      <div className="search-container">
        <input type="text" placeholder="search country"
        onChange={(e)=>setCountry(e.target.value)}/>
        <button onClick={handleSearch}>Search by country</button>
      </div>
    </div>
  )
}

export default Header