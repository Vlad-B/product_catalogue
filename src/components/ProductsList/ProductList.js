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
		const products = this.state.productList.map((product, idx) => {
			return (
				<Product
					key={idx}
					id={idx}
					productCode={product.productCode}
					qty={product.qty}
					price={product.price}
				/>
			);
		});
		return (
			<div>
				<h1>Product Lookup App</h1>
				<NewProductForm createProduct={this.create} />
				<ul>{products}</ul>
			</div>
		);
	}
}
