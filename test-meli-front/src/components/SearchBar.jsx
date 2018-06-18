import React, { Component } from 'react';

const queryString = require('query-string');

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            placeholder: 'Nunca dejes de buscar',
            searchTerm: queryString.parse(this.props.history.location.search).search
        };

        if (this.state.searchTerm !== undefined) {
            this.search();
        }
    }

    search() {
        const BASE_URL = 'http://localhost:3000/api/items';
        let FETCH_URL = `${BASE_URL}?q=${this.state.searchTerm}`;

        fetch(FETCH_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.props.onSearchChanged(this.state.searchTerm, json);
            });
    }

    render () {
        return (
            <div>
                <input
                    value={this.state.searchTerm}
                    placeholder={this.state.placeholder}
                    onChange={event => {this.setState({searchTerm: event.target.value})}}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.search()
                        }
                    }}
                />
            </div>
        )
    }
}

export default SearchBar;