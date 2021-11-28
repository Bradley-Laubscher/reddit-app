// import { fetchRedditPosts } from '../../api/reddit';
import React from 'react';
import { renderPosts, renderDropdownPosts } from '../../api/reddit';

export class GetPosts extends React.Component {
// try adding state and changing state with an onChange event Listener
    constructor(props) {
        super(props);
        this.state ={value: "hot"};
    }

    
    handleChange = (event) =>
        this.setState({ value: event.target.value});


    render() {
        return (
            // <form >
            //   <label for='search-bar' style={{color: 'white'}}>Search Reddit:</label><br/>
            //   <input type='text' id='search-bar'></input>
            //   <button for='search-bar' id='search-bar'>Search</button>
            // </form>
            <div>
                <div className="options">
                    <label style={{color: 'white'}}>Genre:</label>
                    <select className="post-type" onChange={renderDropdownPosts}>:
                        <option value="new">Hot</option>
                        <option value="new">New</option>
                        <option value="top">Top</option>
                        <option value="random">Random</option>
                        <option value="rising">Rising</option>
                        <option value="controversial">Controversial</option>
                    </select>
                </div>

                <div className="post-container">
                    <h3 style={{color: 'white'}}>posts from r/JavaScript</h3>
                    {/* <a class="post" href="(original link for post goes here)">
                        <div class="title"> title </div>
                        <div class="content"> content </div>
                        <div class="author"> author </div>
                        </a>
                        <a class="post" href="(original link for post goes here)">
                        <div class="title"> title </div>
                        <div class="content"> content </div>
                        <div class="author"> author </div>
                        </a> */}
                </div>
            </div>
            
        )
    }
};

