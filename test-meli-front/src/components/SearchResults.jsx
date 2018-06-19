import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import SearchResultItem from './SearchResultItem.jsx';

class SearchResults extends Component {
    constructor(props)  {
        super(props);

        this.state = {
            data: undefined
        };

        if (this.props.searchTerm !== undefined && this.props.searchTerm.length > 0) {
            this.getResults(this.props.searchTerm);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchTerm !== this.props.searchTerm) {
            if (nextProps.searchTerm === "") {
                this.setState({data:undefined});
            } else {
                this.getResults(nextProps.searchTerm);
            }
        }
    }

    getResults(searchTerm) {
        const BASE_URL = 'http://localhost:3000/api/items';
        let FETCH_URL = `${BASE_URL}?q=${searchTerm}`;

        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({data: json});
        });
    }

    render () {
        let searchResults = <div></div>;

        if (this.state.data !== undefined) {
            let searchResultItems = this.state.data.items.map(item => <SearchResultItem item={ item } />);
            searchResults =
                <div>
                    <Breadcrumb categories={this.state.data.categories}> </Breadcrumb>
                    <div className="white-wrap">
                        { searchResultItems }
                    </div>
                </div>
        }

        return searchResults;
    }
}

export default SearchResults;