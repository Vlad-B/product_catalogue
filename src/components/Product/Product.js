import React, { Component } from 'react';

export default class Product extends Component {
	render() {
		return (
			<li>
				<div>Code: {this.props.productCode}</div>
				<div>Quantity: {this.props.qty}</div>
				<div>Price: {this.props.price}</div>
			</li>
		);
	}
}
