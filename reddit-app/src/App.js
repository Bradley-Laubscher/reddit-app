import './App.css';
import React, { useState, useEffect } from 'react';
import { Article } from './components/articles/article';

function App() {

  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('JavaScript');
  const proxy = "https://cors-anywhere.herokuapp.com/";


  useEffect(() => {
      fetch(`${proxy}https://www.reddit.com/r/${subreddit}.json`).then(res => {

        if (res.status !== 200) {
          return;
        } 
        
        res.json().then(data => {
          if (data != null) {
            setArticles(data.data.children);
          }
        })
      });
  }, [subreddit]);

  useEffect(() => {
    if (window.confirm('Press OK to follow a link to temporarily allow access for the the retrieval of data from Reddit. Press Cancel if you have already allowed access and would like to load the page.')) {
      window.open('https://cors-anywhere.herokuapp.com/corsdemo', '_blank')
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src='https://www.redditinc.com/assets/images/site/reddit-logo.png' alt='Reddit-logo'/>
        <h1>
          <span style={{color: 'red'}}>Reddit</span><span style={{color: '#18309cec'}}>Minimal</span>
        </h1>
      </header>
      <div className='App-body'>
        <input type='text' className='input' value={subreddit} onChange={ e => setSubreddit(e.target.value)}/>
        <div className='articles'>
          {
            (articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''
          }
        </div>
      </div>
    </div>
  );
}

export default App;
