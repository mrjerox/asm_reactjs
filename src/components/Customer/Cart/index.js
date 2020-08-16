import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Customer_layout from '../../../pages/customer_layout';


const Cart = () => {
	const [ cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')));
	const [ total, setTotal ] = useState();

	const onDelete = (id) => {
		const other = cart.find(element => element.id == id);
		const result = cart.filter(element => element.id != id);
		setCart(result);
		if (result === []) {
			localStorage.setItem('cart', []);
		} else {
			document.querySelector('#count').innerHTML = result.length;
			const minus = document.querySelector('#cartTotal').innerHTML = total - parseInt(other.price)*other.count;
			setTotal(minus);
			localStorage.setItem('cart', JSON.stringify(result));
		}
	}

	useEffect(() => {
		const totalPrice = () => {
			const arrTotal = [];
			for(let product of cart){
				arrTotal.push(parseInt(product.price)*product.count);
			}	
			const sum = arrTotal.reduce((a,b) => {return a + b},0);
			setTotal(sum);
			localStorage.setItem('total', sum);
			document.querySelector('#cartTotal').innerHTML = sum;
		}
		totalPrice();
	}, [])

	const section = <>
						<div className="bg-light py-3">
				          <div className="container">
				            <div className="row">
				              <div className="col-md-12 mb-0">
				                <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> 
				                <strong className="text-black">Cart</strong>
				              </div>
				            </div>
				          </div>
				        </div>
				        <div className="site-section">
				          <div className="container">
				            <div className="row mb-5">
				              <form className="col-md-12" method="post">
				                <div className="site-blocks-table">
				                  <table className="table table-bordered">
				                    <thead>
				                      <tr>
				                        <th className="product-thumbnail">Image</th>
				                        <th className="product-name">Product</th>
				                        <th className="product-price">Price</th>
				                        <th className="product-quantity">Quantity</th>
				                        <th className="product-total">Total</th>
				                        <th className="product-remove">Remove</th>
				                      </tr>
				                    </thead>
				                    <tbody>
				                    	{cart.map((product, index) => {
				                    		return(
				                    			<tr key={index}>
						                    	 	<td><img src={product.image.original} alt="" width="100"/></td>
						                    		<td>{product.name}</td>
						                    		<td>{product.price}</td>
						                    		<td>{product.count}</td>
						                    		<td>{product.count * product.price}</td>
						                    		<td><button type="button" className="btn btn-danger" onClick={() => {onDelete(product.id)}}>Delete</button></td>
						                    	</tr>
				                    		)
				                    	})}
				                    </tbody>
				                  </table>
				                </div>
				              </form>
				            </div>
				            <div className="row">
				              <div className="col-md-6">
				                <div className="row mb-5">
				                  <div className="col-md-6 mb-3 mb-md-0">
				                    <button className="btn btn-primary btn-md btn-block">Update Cart</button>
				                  </div>
				                  <div className="col-md-6">
				                    <button className="btn btn-outline-primary btn-md btn-block">Continue Shopping</button>
				                  </div>
				                </div>
				                <div className="row">
				                  <div className="col-md-12">
				                    <label className="text-black h4" htmlFor="coupon">Coupon</label>
				                    <p>Enter your coupon code if you have one.</p>
				                  </div>
				                  <div className="col-md-8 mb-3 mb-md-0">
				                    <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
				                  </div>
				                  <div className="col-md-4">
				                    <button className="btn btn-primary btn-md px-4">Apply Coupon</button>
				                  </div>
				                </div>
				              </div>
				              <div className="col-md-6 pl-5">
				                <div className="row justify-content-end">
				                  <div className="col-md-7">
				                    <div className="row">
				                      <div className="col-md-12 text-right border-bottom mb-5">
				                        <h3 className="text-black h4 text-uppercase" id="total">Cart Totals</h3>
				                      </div>
				                    </div>
				                    <div className="row mb-5">
				                      <div className="col-md-6">
				                        <span className="text-black">Total</span>
				                      </div>
				                      <div className="col-md-6 text-right">
				                        <strong className="text-black" id="cartTotal"></strong>
				                      </div>
				                    </div>
				                    <div className="row">
				                      <div className="col-md-12">
										<Link to="/checkout">
				                        	<button className="btn btn-primary btn-lg btn-block">Proceed To Checkout</button>
										</Link>
				                      </div>
				                    </div>
				                  </div>
				                </div>
				              </div>
				            </div>
				          </div>
				        </div>
					</>
	return (
		<>
			<Customer_layout section={section} cart={cart} />
		</>
	)
}

export default Cart