import React  from 'react';


class Item extends React.Component {

    render() {
        let price = this.props.item.price.amount+'';
        price = price.split('.');

        let priceWithTwoDecimals =
            <span className="item-price">
                {'$ ' + Number.parseInt(price[0]).toLocaleString() }<sup>{ price[1] ? price[1] : '00' }</sup>
            </span>;

        return (
            <div>
                <div className="item-header">
                    <div className="item-image">
                        <div>
                            <img src={ this.props.item.picture } alt={ this.props.item.title } />
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="item-header-right">
                        <header className="item-title"><h1>{ this.props.item.title }</h1></header>
                        { priceWithTwoDecimals }
                        <div className="item-buy">
                            <button>Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="item-description">
                    <h2>Descripción del producto</h2>
                    <div className="item-description-text">
                        { this.props.item.description  }
                    </div>
                </div>
            </div>
        )
    }
}
export default Item;