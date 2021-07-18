import React, { Component } from 'react';

import './styles/NewProductForm.css';

export default class NewProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			productCode: '',
			qty: '',
			price: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.createProduct({ ...this.state });
		this.setState({ productCode: '', qty: '', price: '' });
	}

	render() {
		const { productCode, qty, price } = this.state;
		return (
			<form
				className="NewProductForm"
				autocomplete="off"
				onSubmit={this.handleSubmit}
			>
				<div className="NewProductForm-productCode">
					<label htmlFor="productCode">Product Code</label>
					<input
						required
						type="text"
						maxLength="18"
						placeholder="Add new product code"
						value={productCode}
						id="productCode"
						name="productCode"
						onChange={this.handleChange}
					/>
				</div>

				<div className="NewProductForm-quantity">
					<label htmlFor="qty">Quantity</label>
					<input
						required
						type="number"
						min="0"
						max="9999"
						placeholder="Required quantity"
						value={qty}
						id="qty"
						name="qty"
						onChange={this.handleChange}
					/>
				</div>

				<div className="NewProductForm-price">
					<label htmlFor="price">Price</label>
					<input
						required
						type="number"
						placeholder="Price"
						value={price}
						id="price"
						name="price"
						onChange={this.handleChange}
					/>
				</div>

				<button>Add Product</button>
			</form>
		);
	}
}
