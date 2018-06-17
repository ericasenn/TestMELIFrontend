import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: undefined
        }
    }

    onSearchChanged = (jsonResults)  => {
        this.setState({searchResults: jsonResults});
        console.log(this.state.searchResults);
    };

    render () {
        return (
            <div>
                <SearchBar onSearchChanged={this.onSearchChanged}/>
                <SearchResults data={this.state.searchResults}/>
            </div>
        )
    }
}

export default App;