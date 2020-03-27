import React, {useState} from 'react';
import Tweet from './Tweet';
import './App.css'

function App() {

  const [users, setUsers] = useState([
    {name: 'Ed', message: 'Hello'},
    {name: 'John', message: 'I am John'},
    {name: 'Amy', message: 'I am blue'}
  ])

  return(
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;