import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CurrencyInput from 'react-currency-input-field';

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
		this.props.createProduct({ ...this.state, id: uuidv4() });
		this.setState({ productCode: '', qty: '', price: '' });
	}

	render() {
		const { productCode, qty, price } = this.state;

		return (
			<form
				className="NewProductForm"
				autoComplete="off"
				onSubmit={this.handleSubmit}
			>
				<div className="NewProductForm-productCode">
					<label htmlFor="productCode">Product Code</label>
					<input
						className="input"
						required
						type="text"
						maxLength="15"
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
						className="input"
						required
						type="number"
						min="0"
						max="9999"
						placeholder="Required quantity"
						value={qty > 9999 ? 9999 : qty}
						id="qty"
						name="qty"
						onChange={this.handleChange}
					/>
				</div>

				<div className="NewProductForm-price">
					<label htmlFor="price">Price</label>
					<CurrencyInput
						className="input"
						required
						id="price"
						name="price"
						value={price}
						groupSeparator=","
						decimalSeparator="."
						placeholder="Please enter a number"
						prefix="£"
						decimalsLimit={2}
						onValueChange={(value, name) => this.setState({ [name]: value })}
					/>
				</div>

				<button>Add Product</button>
			</form>
		);
	}
}
