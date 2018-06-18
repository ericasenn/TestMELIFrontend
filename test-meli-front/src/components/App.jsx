import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import ItemDescription from './ItemDescription.jsx';
import { createBrowserHistory } from 'history';


class App extends Component {
    history = createBrowserHistory();

    constructor(props) {
        super(props);
        this.state = {
            searchResults: undefined
        }
    }

    onSearchChanged = (searchTerm, jsonResults)  => {
        this.setState({searchResults: jsonResults});
        this.history.push('/items?search=' + searchTerm);
    };

    render () {
        return (
            <Router>
                <div>
                    <SearchBar onSearchChanged={this.onSearchChanged} history={this.history}/>
                    <Switch>
                        <Route path='/items/:id' component={ItemDescription} history={this.history}/>
                        <Route path='/' render={()=><SearchResults data={this.state.searchResults} history={this.history}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;