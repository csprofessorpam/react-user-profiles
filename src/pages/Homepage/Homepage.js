import React from 'react'
import './Homepage.css'
//import {userdata} from '../../users.js'
import PersonCard from '../../components/PersonCard/PersonCard';


function Homepage({users}) {
    //console.log(userdata[0])
    //create state for users
    //const [users, setUsers] = React.useState(userdata)

  return (
    <div className="person-container">
        
        {
            users.map(item=><PersonCard person={item} />)
        }
    </div>
  )
}

export default Homepage