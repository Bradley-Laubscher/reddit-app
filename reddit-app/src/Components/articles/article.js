import React from 'react';
import './article.css';

export function Article(props) {
  return (
    <article className='articles'>
      <a href={"https://reddit.com" + props.article.permalink } target="blank">
        <h3 className='articleTitles'>{ props.article.title }</h3>
      </a>
    </article>
  )
}

export default Article;