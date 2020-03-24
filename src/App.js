import React from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css'

function App() {
  return(
    <div className="app">
      <Tweet name="Emily"/>
      <Tweet name="Bob"/>
      <Tweet name="Winter"/>
      <Tweet name="Dev"/>
    </div>
  );
}

export default App;