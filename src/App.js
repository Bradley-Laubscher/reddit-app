import React, { useState, useEffect } from 'react';
import { Article } from './Components/articles/article';
import RLogo from './Resources/RLogo.png';

export function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('Javascript');

  useEffect(() => {
      fetch(`https://www.reddit.com/r/${subreddit}.json`).then(res => {

        if (res.status === 429) {
          alert('Too many resent requests!');
        }

        if (res.status !== 200) {
          return;
        } 
        
        res.json().then(data => {
          if (data != null) {
            setArticles(data.data.children);
          }
        })
   
      });
  }, [subreddit, setSubreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <img className='App-logo' src={RLogo} alt='Reddit-logo'/>
        <h1>
          <span style={{color: 'red'}}>Reddit</span><span style={{color: '#18309cec'}}>Minimal</span>
        </h1>
      </header>
      <div className='App-body'>
        <div className='categories'>
            <button className='buttonLeft' value={'home'} onClick={ e => setSubreddit(e.target.value)}>Home</button>
            <button className='buttonLeft' value={'news'} onClick={ e => setSubreddit(e.target.value)}>News</button>
            <button className='buttonMiddle' value={'funny'} onClick={ e => setSubreddit(e.target.value)}>Funny</button>
            <button className='buttonRight' value={'rising'} onClick={ e => setSubreddit(e.target.value)}>Rising</button>
            <button className='buttonRight' value={'random'} onClick={ e => setSubreddit(e.target.value)}>Random</button>
        </div>
        <p className='inputTitle'>Search Reddit:</p>
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
