import React, { Component } from 'react';

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let categories;

        if (this.props.categories.length > 0) {
            categories = this.props.categories[0].map((category, index) =>
                <li key={ index }>
                    <span>{ category }</span>
                </li>
            )
        }

        return (

            <ul className="breadcrumb">{ categories }</ul>

        )
    }
}

export default Breadcrumb;