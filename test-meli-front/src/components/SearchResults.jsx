import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import SearchResultItem from './SearchResultItem.jsx';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let searchResults = <div></div>;

        if (this.props.data !== undefined) {
            let searchResultItems = this.props.data.items.map(item => <SearchResultItem item={ item } />);
            searchResults =
                <div>
                    <Breadcrumb categories={this.props.data.categories}> </Breadcrumb>
                    <div className="white-wrap">
                        { searchResultItems }
                    </div>
                </div>
        }

        return searchResults;
    }
}

export default SearchResults;