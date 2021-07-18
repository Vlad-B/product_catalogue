import React, { Component } from 'react';
import NewProductForm from '../NewProductForm/NewProductForm';
import Product from '../Product/Product';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
		};
		this.create = this.create.bind(this);
	}

	create(newProduct) {
		this.setState({
			productList: [...this.state.productList, newProduct],
		});
	}

	render() {
		return (
			<div>
				<h1>Product Lookup App</h1>
				<NewProductForm createProduct={this.create} />
				<ul>Product list goes here</ul>
			</div>
		);
	}
}
