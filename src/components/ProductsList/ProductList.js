import React, { Component } from 'react';
import NewProductForm from '../NewProductForm/NewProductForm';
import Product from '../Product/Product';

import './styles/ProductList.css';

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

		// Here I calculate the totalPrice of all products and then turn the SUM into string
		const totalPriceSum = totalPrice
			.reduce((sum, currVal) => sum + currVal)
			.toString();

		// Now that I have the SUM as a string, I'm using this RegExp to separate the Total Price with a comma for every thousand
		const groupSeparator = /\B(?=(\d{3})+(?!\d))/g;

		return (
			<main>
				<div className="ProductList">
					<div className="ProductList-form">
						<div className="ProductList-title">
							<h1>Product Catalogue</h1>
							<div className="ProductList-title-dots">
								<i className="fas fa-circle"></i>
								<i className="fas fa-circle"></i>
								<i className="fas fa-circle"></i>
							</div>
						</div>
						<NewProductForm createProduct={this.create} />
					</div>
					<div className="ProductList-list">
						<div className="ProductList-sections">
							<h5>Code</h5>
							<span className="divider"></span>
							<h5>Qty.</h5>
							<span className="divider"></span>
							<h5>Price</h5>
						</div>
						<ul id="custom-scroll">{products}</ul>
						<div className="ProductList-sum">
							Total Price:
							{totalPriceSum.replace(groupSeparator) === 0
								? ''
								: ` £ ${totalPriceSum.replace(groupSeparator, ',')}`}
						</div>
					</div>
				</div>
			</main>
		);
	}
}
