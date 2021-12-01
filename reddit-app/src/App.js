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
        console.log('Error')
        return;
      }

      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
        }
        })
      });
  }, [subreddit]);


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
