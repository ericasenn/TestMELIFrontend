import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <form action="" role="search">
                <div className="topbar">
                    <div className="wrap">
                        <div className="search">
                            <Link to={'/'} className="meli-logo"></Link>
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
                            <button onClick={ (event) => this.handleClick(event) } type="submit">
                                <i className="search-icon"></i>
                            </button>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
                <div className="clear"></div>
            </form>
        )
    }

    handleClick(event) {
        event.preventDefault()
        if(this.state.searchTerm) {
            this.search()
        }
    }
}

export default SearchBar;