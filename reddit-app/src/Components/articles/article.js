import React from 'react';
import './article.css';

export function Article(props) {

  function selfText() {
    alert(props.article.selftext)
  }

  return (
    <article className='articles'>
      <a href={"https://reddit.com" + props.article.permalink } target="blank">
        <h3 className='articleTitles'>{ props.article.title }</h3>        
      </a>
      <div className='articleInfo'> 
        <h4 id='author'>Author: { props.article.author }</h4>
        <button onClick={selfText} id='selfText'>Learn More</button>
        <h4 id='votes'>
          <img src='https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/thumbs-up-icon-17-256.png' alt='thumbs up'/>  { props.article.ups } <br/>
          <img src='https://iconsplace.com/wp-content/uploads/_icons/000080/256/png/thumbs-down-icon-9-256.png' alt='thumbs down' />  { props.article.downs }
        </h4>
      </div>
    </article>
  )
}

export default Article;