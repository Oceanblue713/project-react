import React from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';
import './App.css'

function App() {
  return(
    <div className="app">
      <Tweet name="Emily" message="This is a tweet1" />
      <Tweet name="Bob" message="This is a tweet2"/>
      <Tweet name="Winter" message="I am the king"/>
      <Tweet name="Dev" message="My new course is available"/>
    </div>
  );
}

export default App;