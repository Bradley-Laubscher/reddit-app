// export const API_ROOT = 'https://www.reddit.com';

// export const getSubredditPosts = async (subreddit) => {
//   const response = await fetch(`${API_ROOT}${subreddit}.json`);
//   const json = await response.json();

//   return json.data.children.map((post) => post.data);
// };

// export const getSubreddits = async () => {
//   const response = await fetch(`${API_ROOT}/subreddits.json`);
//   const json = await response.json();

//   return json.data.children.map((subreddit) => subreddit.data);
// };

// export const getPostComments = async (permalink) => {
//   const response = await fetch(`${API_ROOT}${permalink}.json`);
//   const json = await response.json();

//   return json[1].data.children.map((subreddit) => subreddit.data);
// };



// reducer attempt
// const initialState = [renderPosts('hot'), renderPosts('new'), renderPosts('top'), renderPosts('random'), renderPosts('rising'), renderPosts('contraversial')];
    // const postsReducer = (state = initialState, action) => {
    //     switch (action.type) {
    //         case 'post-type/hot': {
    //             return renderPosts('hot');
    //         }
    //         case 'post-type/new': {
    //             return renderPosts('new');
    //         }
    //         case 'post-type/top': {
    //             return renderPosts('top');
    //         }
    //         case 'post-type/random': {
    //             return renderPosts('random');
    //         }
    //         case 'post-type/rising': {
    //             return renderPosts('rising');
    //         }
    //         case 'post-type/contraversial': {
    //             return renderPosts('contraversial');
    //         }
    //         default: {
    //             return renderPosts('hot');
    //         }
    //     }
    // }



// export const fetchRedditPosts = async () => {
//     fetch('https://www.reddit.com/r/javascript/hot.json')
//   .then(function(res) {
//     return res.json();   // Convert the data into JSON
//   })
//   .then(function(data) {
//     console.log(data);   // Logs the data to the console
//   })
//   .catch(function(err) {
//     console.log(err);   // Log error if any
//   });
// }



const container = document.querySelector(".post-container");
const dropdown = document.querySelector(".post-type");

export const renderPosts = (postType) => {
  // Our proxy that makes cross origin fetching possible
  const proxy = "https://cors-anywhere.herokuapp.com/";

  fetch(`${proxy}https://www.reddit.com/r/javascript/${postType}.json`)
    .then(function(res) {
      // Return the response in JSON format
      return res.json();
    })
    .then(function(res) {
      // Render our posts to the UI in this block
      let currPost, markup = ``;

      // The array that contains our posts
      const postsArr = res.data.children;

      // Add a title based on post type
      markup = `<h3>${postType} posts from r/JavaScript</h3>`;

      // Iterate through our posts array and chain
      // the markup based on our HTML structure
      for (let i = 0; i < postsArr.length; i++) {
        currPost = postsArr[i].data; // a single post object
        markup += `
          <a class="post" href="https://www.reddit.com/${currPost.permalink}">
            <div class="title"> ${currPost.title} </div>
            <div class="content"> 
              ${currPost.selftext} 
              </br></br>
              <span>${currPost.url}</span>
            </div>
            <div class="author"> Posted by ${currPost.author} </div>
          </a>`;
      }
      // Insert the markup HTML to our container
      container.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(function(err) {
      console.log(err); // Log error if any
    });
};


export const renderDropdownPosts = () => {
  let index = dropdown.selectedIndex;
  let value = dropdown.option[index].value;
  renderPosts(value);
}

// dropdown.addEventListener("change", () => {
//     // Gets the currently selected option index
//     let index = dropdown.selectedIndex;
//     // Gets the currently selected option value
//     let value = dropdown.options[index].value;
  
//     renderPosts(value);
//   });

// Load hot posts on page load
// renderPosts("hot");
















    