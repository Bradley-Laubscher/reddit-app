import React from 'react';

export function Article(props) {
  return (
    <article>
      <a href={"https://reddit.com" + props.article.permalink } target="blank">
        <h3>{ props.article.title }</h3>
      </a>
    </article>
  )
}

export default Article;