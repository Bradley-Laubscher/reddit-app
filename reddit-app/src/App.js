import './App.css';
import React from 'react';
import { GetPosts } from './components/body/getPosts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src='https://www.redditinc.com/assets/images/site/reddit-logo.png' alt='Reddit-logo'/>
        <h1>
          <span style={{color: 'red'}}>Reddit</span>Minimal
        </h1>
      </header>
      <div className='App-body'>
        <GetPosts/>
        
      </div>
    </div>
  );
}

export default App;
