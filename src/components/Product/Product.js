import React, { Component } from 'react';

import './styles/Product.css';

export default class Product extends Component {
	render() {
		const { productCode, qty, price } = this.props;
		return (
			<li className="Product">
				<span>{productCode}</span>
				<span>{qty}</span>
				<span>£ {price}</span>
			</li>
		);
	}
}
