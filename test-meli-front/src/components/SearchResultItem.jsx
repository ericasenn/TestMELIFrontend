import React, { Component } from 'react';

class SearchResultItem extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        let price = this.props.item.price.amount+'';
        price = price.split('.');

        let priceWithTwoDecimals =
            <span>
                {'$ ' + Number.parseInt(price[0]).toLocaleString() }<sup>{ price[1] ? price[1] : '00' }</sup>
            </span>;

        return (
            <div>
                <div>
                    <div>
                        <a href={ '/items/'+this.props.item.id } >
                            <div>
                                <img src={ this.props.item.picture } alt={ this.props.item.title } />
                            </div>
                        </a>
                    </div>
                    <div>
                        <div>{ this.props.item.state}</div>
                        <div>
                            { priceWithTwoDecimals }
                            {/*freeShipping*/}
                        </div>
                        <div>
                            <a href={ '/items/'+this.props.item.id } >
                                { this.props.item.title }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResultItem;