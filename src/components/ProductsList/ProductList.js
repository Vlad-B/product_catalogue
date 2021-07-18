import React, { Component } from 'react';
import NewProductForm from '../NewProductForm/NewProductForm';
import Product from '../Product/Product';

export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			totalPrice: [0],
		};
		this.create = this.create.bind(this);
	}

	create(newProduct) {
		const { productList, totalPrice } = this.state;
		this.setState({
			productList: [...productList, newProduct],
			totalPrice: [...totalPrice, parseInt(newProduct.price)],
		});
	}

	render() {
		const { productList, totalPrice } = this.state;
		const products = productList.map((product, idx) => {
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

		const sum = (sum, currVal) => sum + currVal;
		return (
			<div>
				<h1>Product Lookup App</h1>
				<NewProductForm createProduct={this.create} />
				<ul>{products}</ul>
				<div>Total Price = {totalPrice.reduce(sum)}</div>
			</div>
		);
	}
}
