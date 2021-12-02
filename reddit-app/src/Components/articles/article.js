import React, { useState } from 'react';
import './article.css';
import Popup from './selfText';

export function Article(props) {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <article className='articles'>
      <a href={"https://reddit.com" + props.article.permalink } target="blank">
        <h3 className='articleTitles'>{ props.article.title }</h3>        
      </a>
      <div className='articleInfo'> 
        <h4 id='author'>Author: { props.article.author }</h4>
        <input
          type="button"
          value="Learn more"
          onClick={togglePopup}
        />
        {isOpen && <Popup
          content={<>
            <b>{ props.article.title }</b>
            <p>{ props.article.selftext }</p>
          </>}
          handleClose={togglePopup}
          />
        }
        <h4 id='votes'>
          <img src='https://iconsplace.com/wp-content/uploads/_icons/40e0d0/256/png/thumbs-up-icon-17-256.png' alt='thumbs up'/>  { props.article.ups } <br/>
          <img src='https://iconsplace.com/wp-content/uploads/_icons/000080/256/png/thumbs-down-icon-9-256.png' alt='thumbs down' />  { props.article.downs }
        </h4>
      </div>
    </article>
  )
}

export default Article;