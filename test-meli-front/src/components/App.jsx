import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';
import ItemDescription from './ItemDescription.jsx';
import { createBrowserHistory } from 'history';

const queryString = require('query-string');

class App extends Component {
    history = createBrowserHistory();

    constructor(props) {
        super(props);

        this.state = {
            searchTerm: queryString.parse(this.history.location.search).search
        };
    }

    onSearchTriggered = (newSearchTerm)  => {
        if (newSearchTerm === undefined || newSearchTerm.length <= 0) {
            this.history.push('/');
        } else {
            this.history.push('/items?search=' + newSearchTerm);
        }

        this.setState({searchTerm: newSearchTerm});
    };

    componentDidMount() {
        window.onpopstate = this.handlePopState;
    }

    componentWillUnmount() {
        window.onpopstate = null;
    }

    handlePopState = (event) => {
        event.preventDefault();

        let newSearchTerm = queryString.parse(window.location.search.slice(1)).search;
        if (newSearchTerm === undefined) {
            newSearchTerm = "";
        }

        this.setState({searchTerm: newSearchTerm});
    };

    render () {
        return (
            <Router>
                <div className="topbar">
                    <SearchBar onSearchTriggered={this.onSearchTriggered} searchTerm={this.state.searchTerm}/>
                    <Switch>
                        <Route path='/items/:id' component={ItemDescription}/>
                        <Route path='/' render={() => <SearchResults searchTerm={this.state.searchTerm}/>}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;