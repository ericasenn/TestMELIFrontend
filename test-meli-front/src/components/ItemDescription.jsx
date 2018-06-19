import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb.jsx';
import Item from './Item.jsx';


class ItemDescription extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: undefined,
            id: this.props.match.params.id
        };

        if (this.state.id !== undefined) {
            this.getDescription();
        }
    }

    getDescription() {
        const BASE_URL = 'http://localhost:3000/api/items/';
        let FETCH_URL = `${BASE_URL}${this.state.id}`;

        fetch(FETCH_URL, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({item: json});
            });
    }

    render () {
        let itemDescription = <div></div>;

        if (this.state.item !== undefined) {
            let item =  <Item item={ this.state.item } />;
            itemDescription =
                <div>
                    {/*<Breadcrumb categories={this.state.item.categories}> </Breadcrumb>*/}
                    { item }
                </div>
        }
        return itemDescription;
    }
}

export default ItemDescription;
