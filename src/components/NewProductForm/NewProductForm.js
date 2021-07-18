import React, { Component } from 'react';

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
		return (
			<form className="NewProductForm" onSubmit={this.handleSubmit}>
				<label htmlFor="productCode">Product Code</label>
				<input
					required
					type="text"
					placeholder="Add new product code"
					value={this.state.productCode}
					id="productCode"
					name="productCode"
					onChange={this.handleChange}
				/>

				<label htmlFor="qty">Quantity</label>
				<input
					required
					type="text"
					placeholder="Required quantity"
					value={this.state.qty}
					id="qty"
					name="qty"
					onChange={this.handleChange}
				/>

				<label htmlFor="price">Price</label>
				<input
					required
					type="number"
					placeholder="Price"
					value={this.state.price}
					id="price"
					name="price"
					onChange={this.handleChange}
				/>

				<button>Add Todo</button>
			</form>
		);
	}
}
