import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResultItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let freeShipping;
        if (this.props.item.free_shipping) {
            freeShipping = <div className="result-shipping" title="Envío gratis"></div>
        }

        let price = this.props.item.price.amount+'';
        price = price.split('.');

        let priceWithTwoDecimals =
            <span>
                {'$ ' + Number.parseInt(price[0]).toLocaleString() }<sup>{ price[1] ? price[1] : '00' }</sup>
            </span>;

        return (
            <div className="search-result-item">
                <div className="result-picture">
                    <Link to={ '/items/' + this.props.item.id }>
                        <img src={ this.props.item.picture } alt={ this.props.item.title } />
                    </Link>
                </div>
                <div className="clear"></div>
                <div className="result-info">
                    <div className="result-price">
                        { priceWithTwoDecimals }
                        { freeShipping }
                    </div>
                    <h3 className="result-title">
                        <Link to={ '/items/' + this.props.item.id }>
                            { this.props.item.title }
                        </Link>
                    </h3>
                </div>
            </div>
        )
    }
}

export default SearchResultItem;