import React, { useState } from 'react';
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
          className='button'
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
          Upvote Ratio: {props.article.upvote_ratio}
        </h4>
      </div>
    </article>
  )
}