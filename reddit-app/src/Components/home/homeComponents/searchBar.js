import { getSubreddits } from '../../../api/reddit';

export const handleSubmit = e => {
  e.preventDefault();
  const subreddit = document.getElementById('search-bar').value;
  getSubreddits(subreddit);
}

