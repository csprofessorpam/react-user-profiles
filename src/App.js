import React from 'react'
import './App.css';
import {userData} from './utils/users.js'
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  //create state for users
  const [users, setUsers] = React.useState([])
  //const [users, setUsers] = React.useState(userdata)

  return (
    <div className="App">
      
      <Header setUsers={setUsers} userData={userData}/>
      
      <Homepage users={users}/>
        
    </div>
  );
}

export default App;
