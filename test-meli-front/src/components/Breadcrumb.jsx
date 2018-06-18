import React, { Component } from 'react';

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let categories;

        if (this.props.categories.length > 0) {
            categories = this.props.categories[0].map((category, index) =>
                <span key={ index }>
                    <span itemProp="title">{ category }</span>
                    {this.props.categories[0].length === index  ? <span></span>: <span> > </span> }
                </span>
            )
        }

        return (

            <div>{ categories }</div>

        )
    }
}

export default Breadcrumb;