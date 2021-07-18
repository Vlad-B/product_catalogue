import React, { Component } from 'react';

export default class Product extends Component {
	render() {
		const { productCode, qty, price } = this.props;
		return (
			<li>
				<div>Code: {productCode}</div>
				<div>Quantity: {qty}</div>
				<div>Price: {price}</div>
			</li>
		);
	}
}
