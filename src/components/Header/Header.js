import React from 'react'
import "./Header.css"
//import {userdata} from '../../utils/users.js'
//userdata is storage for all users
//should come from database

function Header({userData, setUsers}) {

  const [country, setCountry] = React.useState("")

  const handleSearch = () =>{
    //filter using country
    setUsers(userData.filter(item=> item.country.toLowerCase()===country.toLowerCase()))
  }
  return (
    <div className="header-container">
      <button onClick={()=>setUsers(userData)}>Show all</button>
      <div className="search-container">
        <input type="text" placeholder="enter country"
        onChange={(e)=>setCountry(e.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Header