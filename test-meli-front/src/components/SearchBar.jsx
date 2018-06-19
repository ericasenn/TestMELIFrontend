import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: this.props.searchTerm
        };
    }

    search() {
        this.props.onSearchTriggered(this.state.searchTerm);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.searchTerm !== this.state.searchTerm) {
            this.setState({searchTerm: newProps.searchTerm});
        }
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
                                placeholder='Nunca dejes de buscar'
                                onChange={event => {this.setState({searchTerm: event.target.value})}}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        event.preventDefault();
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
        if(this.state.searchTerm) {
            event.preventDefault();
            this.search()
        }
    }
}

export default SearchBar;