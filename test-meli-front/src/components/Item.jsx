import React, { Component } from 'react';


class Item extends React.Component {

    render() {

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
                        <div>
                            <div>
                                <img src={ this.props.item.picture } alt={ this.props.item.title } />
                            </div>
                        </div>
                        <div>

                            <header><h1>{ this.props.item.title }</h1></header>
                            { priceWithTwoDecimals }
                            <div>
                                <button>Comprar</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Descripción del producto</h2>
                        <div>
                            { this.props.item.description  }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;