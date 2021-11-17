import React from 'react';
import { handleSubmit } from './homeComponents/searchBar';

// import searchResults from './homeComponents/searchResults';
// import { useDispatch, useSelector } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label for='search-bar' style={{color: 'white'}}>Search Reddit:</label><br/>
                    <input type='search' id='search-bar'></input>
                    <button for='search-bar'>Search</button>
                </form>
                <div>
                    
                </div>
            </div>
        )
    }

}


export default Home;